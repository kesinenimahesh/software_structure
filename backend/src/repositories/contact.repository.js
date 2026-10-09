"use strict";
const { pool } = require("../config/database");
async function insert({ name, email, message }) {
  const [result] = await pool.execute(
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
    [name, email, message]
  );
  return { id: result.insertId };
}
module.exports = { insert };
