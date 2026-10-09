"use strict";
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("skillTechDesktop", Object.freeze({
  platform: process.platform,
  appName: "Skill Tech Software Solutions"
}));
