# Database deployment and persistence

- Keep live MySQL data outside the installation directory.
- Use a dedicated database and least-privilege account.
- Never put production credentials in frontend files or source control.
- Maintain a migration history table and apply each migration exactly once.
- Do not reset or drop customer data during an upgrade.
- Back up before schema changes and test restoration on a clean machine.
- Check for existing MySQL services and port conflicts; do not overwrite another application database.
- Choose a supported MySQL version and verify distribution/licensing obligations.
- No demo customer records are included in this scaffold.
