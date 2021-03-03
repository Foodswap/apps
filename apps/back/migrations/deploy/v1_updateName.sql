-- Deploy foodswap:v1_updateName to pg

BEGIN;

ALTER TABLE author RENAME COLUMN pseudonym TO username;

ALTER TABLE author RENAME COLUMN "address" TO city;

COMMIT;
