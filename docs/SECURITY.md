# Security requirements

- Electron context isolation enabled, Node integration disabled, sandbox where compatible.
- Restrict preload bridge to explicitly approved methods.
- Validate all input in backend; use parameterized SQL.
- Bind local backend to loopback unless there is a documented reason otherwise.
- Do not rely on loopback as the only authentication boundary.
- Handle port selection safely and tell the frontend the selected local API address through a controlled mechanism.
- Keep production secrets outside packaged application resources.
- Restrict navigation, external URLs, permissions and Content Security Policy.
- Redact credentials, tokens and private records from logs.
- Test code-signing and secure update distribution before broad deployment.
