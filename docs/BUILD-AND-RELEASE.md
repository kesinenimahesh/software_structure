# Build and release

Development:
1. Install Node.js LTS and MySQL Server for development.
2. Copy `backend/.env.example` to `backend/.env` and use local-only credentials.
3. Create the development database and apply the approved schema.
4. Run `npm install` and `npm --prefix backend install`.
5. Run `npm run dev`.

Release:
1. Integrate the original source and reconcile package dependencies.
2. Implement and test MySQL provisioning, service management and persistent storage.
3. Implement safe migrations and backup/restore.
4. Resolve packaged backend path and Node runtime strategy.
5. Run `npm run check:structure`.
6. Run unit/integration/API tests.
7. Run `npm run build:win` on a supported Windows build environment.
8. Install the setup on a clean Windows VM without XAMPP, Node.js or developer tools.
9. Test offline features, restart, data persistence, upgrade and uninstall.
10. Sign the installer where practical and archive version/checksum/release notes.
