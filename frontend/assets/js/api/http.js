"use strict";
export async function apiRequest(path, options = {}) {
  const response = await fetch(`${window.APP_CONFIG.apiBaseUrl}${path}`, {
    ...options,
    headers: { Accept: "application/json", ...(options.headers || {}) }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || `Request failed (${response.status})`);
  return payload;
}
