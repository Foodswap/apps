-- Revert foodswap:v1_updateTableMeal from pg

BEGIN;

ALTER TABLE Meal DROP COLUMN picture_path; 

COMMIT;
