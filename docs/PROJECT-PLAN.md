# Phased project plan

Phase 1 — Audit: inspect original source folders, package manifests, API contract, schema, migrations and tests; back up code and database.

Phase 2 — Integrate: place original frontend files in frontend/ and backend files in backend/; update only required paths and imports.

Phase 3 — Electron: implement startup/shutdown, secure preload, backend process management, dynamic port strategy and health checks.

Phase 4 — MySQL: choose supported/licensed distribution; implement service provisioning, app-data directory, restricted account, migration runner, backup and recovery.

Phase 5 — Installer: configure Electron Builder/NSIS, icon, runtime dependencies, shortcuts, upgrade and uninstall.

Phase 6 — QA: test on a clean Windows machine without XAMPP or developer tools; verify local workflows offline, persistence, backups, upgrades and safe uninstall.

Production gate: do not declare complete until the real original application has been integrated and all clean-machine tests pass.
