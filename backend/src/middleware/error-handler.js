"use strict";
function errorHandler(error, req, res, next) {
  console.error("[api-error]", error);
  if (res.headersSent) return next(error);
  res.status(500).json({ success: false, message: process.env.NODE_ENV === "production" ? "Internal server error." : error.message });
}
module.exports = { errorHandler };
