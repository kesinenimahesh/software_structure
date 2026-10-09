# Skill Tech Software Solutions — Desktop Project Plan

## Important status
This ZIP contains a detailed target folder structure and starter integration code based on the supplied frontend/backend folder screenshots. It is **not a merged copy of the complete original application**, because the original source ZIP was not attached. Files labelled `INTEGRATE ORIGINAL` are explicit placeholders for the actual source code.

## Target architecture
- `frontend/`: original HTML, CSS, JavaScript, images, icons, fonts and videos.
- `backend/`: original Node.js backend, layered source, database migrations, tests and OpenAPI specification.
- `desktop/`: Electron main process, preload bridge, startup/lifecycle managers.
- `installer/`: icon, NSIS customisation and approved runtime provisioning assets.
- `docs/`: detailed architecture, folder explanations, installation, database, security and release documentation.

## Do not lose original code
Before integration, back up both source projects. Copy the actual frontend files into the matching `frontend/` paths and the actual backend files into the matching `backend/` paths. Do not replace real controllers, services, repositories, routes, models, middleware, validators, migrations or CSS/JS with placeholder files.

## Development prerequisites
- Node.js LTS for development/build only.
- MySQL Server for development, configured with a local development database.
- Electron and Electron Builder installed through npm.

## Production goal
The customer installs a branded Windows setup EXE and can run supported local features without manually starting XAMPP or a development server. The final installer must install/provision a supported MySQL runtime, configure persistent data storage, initialise the schema safely, start the backend, wait for health readiness, and launch the desktop window.

## Current scaffold limitations
- No original source ZIP was provided, so original page designs and business logic are not embedded here.
- MySQL provisioning/service installation is not implemented.
- The migration runner is a placeholder and must not be used to initialise a production database.
- The package/build configuration needs a clean-Windows-machine validation before release.
- No demo business records are included.
