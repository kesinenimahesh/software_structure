"use strict";
document.addEventListener("DOMContentLoaded", async () => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  const status = document.getElementById("api-status");
  if (!status) return;
  try {
    const response = await fetch(`${window.APP_CONFIG.apiBaseUrl}/health`);
    if (!response.ok) throw new Error("Health endpoint failed");
    const result = await response.json();
    status.textContent = result.database === "connected"
      ? "Local backend and database connected"
      : "Backend online; database connection needs attention";
  } catch {
    status.textContent = "Local backend unavailable. Check startup and database settings.";
  }
});
