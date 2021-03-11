-- Revert foodswap:v1_uploadData from pg

BEGIN;

DELETE * FROM category;

COMMIT;
