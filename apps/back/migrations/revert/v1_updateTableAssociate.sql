-- Revert foodswap:v1_updateTableAssociate from pg

BEGIN;

DROP TABLE meal_ingredient_associate;

DROP TABLE meal_category_associate;

CREATE TABLE meal_category_associate (
    id_meal INT REFERENCES meal(id),
    id_category INT REFERENCES category(id)
);

CREATE TABLE meal_ingredient_associate (
    id_meal INT REFERENCES meal(id),
    id_ingredient INT REFERENCES ingredient(id)
);

COMMIT;
