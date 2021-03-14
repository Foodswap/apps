-- Revert foodswap:v1_uploadDataCategories from pg

BEGIN;

DROP * FROM category;

COMMIT;
