-- Revert foodswap:v1_init from pg

BEGIN;

DROP TABLE swap;

DROP TABLE meal_ingredient_associate;

DROP TABLE ingredient;

DROP TABLE meal_category_associate;

DROP TABLE meal;

DROP TABLE category;

DROP TABLE author;

COMMIT;
