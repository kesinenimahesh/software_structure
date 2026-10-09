"use strict";
const { spawnSync } = require("node:child_process");
const command = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(command, ["electron-builder", "--win", "nsis"], {
  stdio: "inherit", shell: process.platform === "win32"
});
process.exit(result.status ?? 1);
