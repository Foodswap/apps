-- Deploy foodswap:v1_updateTableMeal to pg

BEGIN;

ALTER TABLE Meal ADD picture_path TEXT;

COMMIT;
