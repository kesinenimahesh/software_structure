"use strict";
const router = require("express").Router();
router.post("/", require("../controllers/contact.controller").createContactMessage);
module.exports = router;
