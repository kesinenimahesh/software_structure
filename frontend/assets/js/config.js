"use strict";
// Development-only fixed port. Production should pass the actual selected port
// from the Electron main process through a narrow preload bridge or generated config.
window.APP_CONFIG = Object.freeze({ apiBaseUrl: "http://127.0.0.1:4317/api" });
