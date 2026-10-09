"use strict";
const router = require("express").Router();
router.get("/", require("../controllers/health.controller").health);
module.exports = router;
