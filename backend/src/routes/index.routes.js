"use strict";
// INTEGRATE original route registrations here. Do not drop any current API routes.
const router = require("express").Router();
router.use("/health", require("./health.routes"));
router.use("/contact", require("./contact.routes"));
module.exports = router;
