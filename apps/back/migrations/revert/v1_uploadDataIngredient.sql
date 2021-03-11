-- Revert foodswap:v1_uploadDataIngredient from pg

BEGIN;

DELETE * FROM ingredient;

COMMIT;
