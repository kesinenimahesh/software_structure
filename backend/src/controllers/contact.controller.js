"use strict";
const { saveContactMessage } = require("../services/contact.service");
async function createContactMessage(req, res, next) {
  try {
    const { name, email, message } = req.body || {};
    if (![name, email, message].every(v => typeof v === "string" && v.trim())) {
      return res.status(400).json({ success: false, message: "Name, email and message are required." });
    }
    if (name.length > 120 || email.length > 254 || message.length > 5000) {
      return res.status(400).json({ success: false, message: "One or more fields are too long." });
    }
    const result = await saveContactMessage({ name: name.trim(), email: email.trim(), message: message.trim() });
    return res.status(201).json({ success: true, id: result.id, message: "Message saved." });
  } catch (error) { next(error); }
}
module.exports = { createContactMessage };
