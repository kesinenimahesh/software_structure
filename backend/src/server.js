"use strict";
const app = require("./app");
const { host, port } = require("./config/env");
const { checkDatabase, pool } = require("./config/database");
let server;

async function start() {
  try { await checkDatabase(); app.locals.databaseReady = true; }
  catch (error) { app.locals.databaseReady = false; console.error("[startup] MySQL is unavailable:", error.message); }
  server = app.listen(port, host, () => console.log(`[api] Listening on http://${host}:${port}`));
}
async function shutdown(signal) {
  console.log(`[api] ${signal}: shutting down`);
  if (server) await new Promise(resolve => server.close(resolve));
  await pool.end().catch(() => {});
  process.exit(0);
}
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
start().catch(error => { console.error(error); process.exit(1); });
