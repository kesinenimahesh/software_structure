# Architecture and folder responsibilities

## Overall flow
Windows Setup -> Electron main process -> Node.js API -> MySQL Server -> persistent data directory.

The frontend contains no database credentials and never connects directly to MySQL. It calls API endpoints exposed by the local backend.

## Frontend file-by-file
- `frontend/index.html`: home/entry page; in this starter it is a smoke-test placeholder.
- `frontend/about.html`: About page; replace with original page.
- `frontend/services.html`: Services page; replace with original page.
- `frontend/contact.html`: Contact page; replace with original page.
- `frontend/404.html`: fallback/not-found page.
- `frontend/robots.txt`: crawler directives for web-hosted version; not required for offline desktop.
- `frontend/sitemap.xml`: web SEO sitemap placeholder; not required for offline desktop.
- `frontend/manifest.webmanifest`: web-app manifest if also deployed as a website/PWA.
- `frontend/favicon.svg`: browser/web icon; separate from Windows ICO.
- `frontend/assets/css/reset.css`: normalizes browser defaults.
- `frontend/assets/css/variables.css`: shared colors, spacing and design tokens.
- `frontend/assets/css/global.css`: base typography, page background and shared rules.
- `frontend/assets/css/layout.css`: header, navigation, containers and footer layout.
- `frontend/assets/css/components.css`: shared reusable component styles.
- `frontend/assets/css/responsive.css`: mobile/tablet responsive rules.
- `frontend/assets/css/pages/home.css`: home-only styles.
- `frontend/assets/css/pages/about.css`: About-only styles.
- `frontend/assets/css/pages/services.css`: Services-only styles.
- `frontend/assets/css/pages/contact.css`: Contact-only styles.
- `frontend/assets/js/config.js`: API base URL/configuration. Production must support a dynamically selected port.
- `frontend/assets/js/main.js`: global startup logic and API health display.
- `frontend/assets/js/api/http.js`: shared API request helper.
- `frontend/assets/js/api/contact.api.js`: contact endpoint client; reconcile with original API contract.
- `frontend/assets/js/components/navbar.js`: shared navigation behavior/component.
- `frontend/assets/js/components/footer.js`: shared footer behavior/component.
- `frontend/assets/js/pages/home.js`: home page interactions.
- `frontend/assets/js/pages/about.js`: About page interactions.
- `frontend/assets/js/pages/services.js`: Services page interactions.
- `frontend/assets/js/pages/contact.js`: Contact page interactions.
- `frontend/assets/js/utils/dom.js`: shared DOM helpers.
- `frontend/assets/js/utils/validators.js`: shared client-side validation helpers.
- `frontend/assets/images/`: raster/vector images.
- `frontend/assets/icons/`: UI icons.
- `frontend/assets/fonts/`: locally packaged fonts for offline use.
- `frontend/assets/videos/`: locally packaged video files for offline use.

## Backend file-by-file
- `backend/src/server.js`: starts the HTTP server and handles shutdown.
- `backend/src/app.js`: configures Express middleware and mounts routes.
- `backend/src/config/env.js`: loads and validates runtime configuration.
- `backend/src/config/database.js`: creates the MySQL connection pool and health check.
- `backend/src/routes/index.routes.js`: central route registry.
- `backend/src/routes/health.routes.js`: health endpoint.
- `backend/src/routes/auth.routes.js`: original authentication endpoints must be integrated here.
- `backend/src/routes/contact.routes.js`: contact-message endpoint.
- `backend/src/controllers/health.controller.js`: reports API/database status.
- `backend/src/controllers/auth.controller.js`: authentication request handling.
- `backend/src/controllers/contact.controller.js`: validates and handles contact requests.
- `backend/src/services/auth.service.js`: authentication business logic.
- `backend/src/services/contact.service.js`: contact workflow.
- `backend/src/repositories/user.repository.js`: user SQL/data access.
- `backend/src/repositories/contact.repository.js`: contact-message SQL/data access.
- `backend/src/models/user.model.js`: user data representation.
- `backend/src/models/contact-message.model.js`: contact-message data representation.
- `backend/src/middleware/authenticate.js`: verifies authentication.
- `backend/src/middleware/authorize.js`: enforces roles/permissions.
- `backend/src/middleware/validate.js`: request validation middleware.
- `backend/src/middleware/rate-limit.js`: limits repeated requests where appropriate.
- `backend/src/middleware/not-found.js`: returns a structured 404 for unknown API routes.
- `backend/src/middleware/error-handler.js`: central error response and logging.
- `backend/src/validators/auth.validator.js`: authentication input schemas.
- `backend/src/validators/contact.validator.js`: contact input schemas.
- `backend/src/utils/app-error.js`: common application error class.
- `backend/src/utils/logger.js`: structured logs with sensitive values redacted.
- `backend/src/utils/async-handler.js`: async controller wrapper if used.
- `backend/database/migrate.js`: migration runner; current file intentionally blocks until safely implemented.
- `backend/database/seed.js`: approved reference data only; no demo records.
- `backend/database/migrations/001_initial.sql`: starter contact table only, not the original full schema.
- `backend/database/seeds/`: approved static/reference seeds, if any.
- `backend/tests/unit/`: unit tests.
- `backend/tests/integration/`: service/repository/database integration tests.
- `backend/tests/api/`: HTTP/API contract tests.
- `backend/docs/openapi.yaml`: API contract; merge the original OpenAPI specification.

## Desktop and installer
- `desktop/main.js`: creates the window, manages application startup and handles fatal startup errors.
- `desktop/preload.js`: exposes a minimal controlled API to the renderer.
- `desktop/lifecycle/backend-manager.js`: starts the local API, waits for health and stops it.
- `desktop/lifecycle/database-manager.js`: production MySQL provisioning TODO.
- `desktop/security/permissions.js`: security policy reference.
- `installer/assets/Skill-Tech-Logo.ico`: supplied Windows application icon.
- `installer/installer.nsh`: NSIS customisation entry point.
- `installer/runtime/`: intentionally empty until the licensed runtime choice is finalized.
- `scripts/check-structure.js`: checks required scaffold paths.
- `scripts/package-windows.js`: build wrapper.
- `docs/`: maintained project documentation.
- `release/`: generated installer output only; never live customer data.
