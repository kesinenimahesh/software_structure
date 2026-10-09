# Installation workflow

1. Customer runs Skill Tech Setup.exe.
2. Installer checks OS architecture, permissions, disk space and service conflicts.
3. Installer installs application files.
4. Installer provisions the approved MySQL Server runtime and creates a dedicated service/database/account.
5. Data is stored in a protected persistent application-data directory outside the install folder.
6. A versioned migration runner checks migration history and safely applies pending migrations.
7. Installer creates Start Menu and desktop shortcuts.
8. On launch, Electron starts the backend, waits for the health endpoint and database readiness, then opens the original UI.

The current scaffold does not yet implement MySQL installation or safe migration execution. Do not distribute as finished software until these are implemented and tested.
