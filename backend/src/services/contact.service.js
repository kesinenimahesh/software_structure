"use strict";
module.exports = { saveContactMessage: input => require("../repositories/contact.repository").insert(input) };
