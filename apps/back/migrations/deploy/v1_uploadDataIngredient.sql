-- Deploy foodswap:v1_uploadDataIngredient to pg

BEGIN;

INSERT INTO ingredient ("name") VALUES ('Sel'), ('Poivre'), ('Huile'), ('Pommes de terre'), ('Graisse de canard');

COMMIT;
