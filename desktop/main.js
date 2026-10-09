"use strict";
const { app, BrowserWindow, dialog, shell } = require("electron");
const path = require("node:path");
const { startBackend, waitForHealth, stopBackend } = require("./lifecycle/backend-manager");
let mainWindow;
let backend;
async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, height: 820, minWidth: 900, minHeight: 620,
    show: false, autoHideMenuBar: true,
    icon: path.join(__dirname, "..", "installer", "assets", "Skill-Tech-Logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true, nodeIntegration: false, sandbox: true
    }
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://")) shell.openExternal(url);
    return { action: "deny" };
  });
  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith("file://") && !url.startsWith("http://127.0.0.1:")) event.preventDefault();
  });
  await mainWindow.loadFile(path.join(__dirname, "..", "frontend", "index.html"));
  mainWindow.show();
}
app.whenReady().then(async () => {
  try {
    backend = await startBackend();
    await waitForHealth(backend.baseUrl, 30000);
    await createWindow();
  } catch (error) {
    await dialog.showMessageBox({ type: "error", title: "Skill Tech startup error",
      message: "Skill Tech Software Solutions could not start.",
      detail: `${error.message}\nCheck the local backend and database configuration.` });
    app.quit();
  }
});
app.on("before-quit", async () => { if (backend) await stopBackend(backend); });
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0 && backend) createWindow(); });
