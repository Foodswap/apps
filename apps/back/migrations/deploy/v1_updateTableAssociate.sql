-- Deploy foodswap:v1_updateTableAssociate to pg

BEGIN;

DROP TABLE meal_ingredient_associate;

DROP TABLE meal_category_associate;

CREATE TABLE meal_category_associate (
    id_meal INT REFERENCES meal(id),
    id_category INT REFERENCES category(id),
    PRIMARY KEY (id_meal, id_category)
);

CREATE TABLE meal_ingredient_associate (
    id_meal INT REFERENCES meal(id),
    id_ingredient INT REFERENCES ingredient(id),
    PRIMARY KEY (id_meal, id_ingredient)
);

COMMIT;
