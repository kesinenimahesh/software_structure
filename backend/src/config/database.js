"use strict";
const mysql = require("mysql2/promise");
const { db } = require("./env");
const pool = mysql.createPool({
  host: db.host, port: db.port, database: db.name, user: db.user, password: db.password,
  waitForConnections: true, connectionLimit: 10, queueLimit: 0, enableKeepAlive: true
});
async function checkDatabase() {
  const connection = await pool.getConnection();
  try { await connection.query("SELECT 1"); } finally { connection.release(); }
}
module.exports = { pool, checkDatabase };
