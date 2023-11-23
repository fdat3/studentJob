#!/bin/bash
set -e;
if [ -n "${DB_USER:-}" ] && [ -n "${DB_PASSWORD:-}" ]; then
	psql -v ON_ERROR_STOP=1 --username "DB_USER"  <<-EOSQL
		CREATE DATABASE ${DB_DATABASE};
		GRANT ALL PRIVILEGES ON DATABASE ${DB_DATABASE} TO ${DB_USER};
	EOSQL
else
	echo "SETUP INFO: No Environment variables given!"
fi
