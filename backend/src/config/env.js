"use strict";
const path = require("node:path");
require("dotenv").config({ path: process.env.SKILL_TECH_ENV_PATH || path.resolve(process.cwd(), "backend", ".env") });
const positiveInt = (value, fallback) => Number.isInteger(Number(value)) && Number(value) > 0 ? Number(value) : fallback;
module.exports = {
  nodeEnv: process.env.NODE_ENV || "development",
  host: process.env.HOST || "127.0.0.1",
  port: positiveInt(process.env.PORT, 4317),
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: positiveInt(process.env.DB_PORT, 3306),
    name: process.env.DB_NAME || "skill_tech_app",
    user: process.env.DB_USER || "skill_tech_app",
    password: process.env.DB_PASSWORD || ""
  }
};
