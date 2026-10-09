"use strict";
// Reconcile with the original contact API request/response contract.
export async function submitContactMessage(message) {
  const response = await fetch(`${window.APP_CONFIG.apiBaseUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(message)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || "Unable to submit message.");
  return result;
}
