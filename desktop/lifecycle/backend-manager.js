"use strict";
const { spawn } = require("node:child_process");
const http = require("node:http");
const path = require("node:path");

async function startBackend() {
  const packaged = process.resourcesPath;
  const serverFile = appIsPackaged()
    ? path.join(packaged, "app", "backend", "src", "server.js")
    : path.join(__dirname, "..", "..", "backend", "src", "server.js");
  // Development fallback. Production must verify Node runtime packaging and
  // native module compatibility, or use a tested Electron utilityProcess design.
  const child = spawn(process.execPath, [serverFile], {
    cwd: path.dirname(path.dirname(serverFile)),
    env: { ...process.env, ELECTRON_RUN_AS_NODE: "1" },
    stdio: ["ignore", "pipe", "pipe"], windowsHide: true
  });
  child.stdout.on("data", chunk => console.log(`[backend] ${chunk}`));
  child.stderr.on("data", chunk => console.error(`[backend] ${chunk}`));
  return { child, baseUrl: "http://127.0.0.1:4317" };
}
function appIsPackaged() {
  try { return require("electron").app.isPackaged; } catch { return false; }
}
function requestHealth(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(`${url}/api/health`, res => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", c => data += c);
      res.on("end", () => { try { resolve({ status: res.statusCode, body: JSON.parse(data) }); } catch (e) { reject(e); } });
    });
    req.setTimeout(1200, () => req.destroy(new Error("health check timeout")));
    req.on("error", reject);
  });
}
async function waitForHealth(url, timeout = 30000) {
  const deadline = Date.now() + timeout;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const r = await requestHealth(url);
      if (r.status === 200 && r.body && r.body.success) return r;
    } catch (e) { lastError = e; }
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  throw new Error(`Backend did not become ready: ${lastError ? lastError.message : "timeout"}`);
}
async function stopBackend(handle) {
  if (handle?.child && !handle.child.killed) handle.child.kill();
}
module.exports = { startBackend, waitForHealth, stopBackend };
