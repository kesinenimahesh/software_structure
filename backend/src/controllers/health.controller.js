"use strict";
async function health(req, res) {
  res.status(200).json({
    success: true,
    service: "skill-tech-local-api",
    status: "running",
    database: req.app.locals.databaseReady ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
}
module.exports = { health };
