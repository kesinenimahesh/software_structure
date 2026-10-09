"use strict";
// Production TODO: implement the chosen/licensed MySQL server provisioning strategy,
// service readiness, persistent app-data path, least-privilege account setup,
// migration execution, upgrade handling, and recovery behavior.
async function ensureDatabaseReady() {
  throw new Error("MySQL provisioning is not configured. Do not release this scaffold as production software.");
}
module.exports = { ensureDatabaseReady };
