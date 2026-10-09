# Troubleshooting

## Blank window
Inspect Electron logs, page paths, CSS/JS paths, Content Security Policy and local API readiness.

## Backend does not start
Check packaged server path, runtime compatibility, port conflicts and backend logs.

## Database disconnected
Check MySQL service status, DB host/port/name, account permissions, credentials and schema/migration state. Do not delete or recreate the database as a shortcut.

## Setup fails
Check installer logs, Windows permissions, disk space, architecture and runtime installer exit codes.

## Data missing after update
Stop the application, preserve database files and logs, review migration history and restore from a verified backup if necessary. Never overwrite live data during recovery.
