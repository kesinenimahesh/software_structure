"use strict";
const fs = require("node:fs");
const path = require("node:path");
const required = [
  "frontend/index.html",
  "frontend/assets/css/global.css",
  "frontend/assets/js/main.js",
  "backend/src/server.js",
  "backend/src/app.js",
  "backend/src/config/database.js",
  "desktop/main.js",
  "desktop/preload.js",
  "installer/assets/Skill-Tech-Logo.ico"
];
const missing = required.filter(p => !fs.existsSync(path.resolve(__dirname, "..", p)));
if (missing.length) {
  console.error("Missing required scaffold files:\n" + missing.join("\n"));
  process.exit(1);
}
console.log(`Structure check passed (${required.length} required paths).`);
console.log("This does not verify original-source integration, MySQL provisioning, or production readiness.");
