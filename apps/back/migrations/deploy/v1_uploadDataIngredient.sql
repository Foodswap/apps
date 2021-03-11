-- Deploy foodswap:v1_uploadDataIngredient to pg

BEGIN;

INSERT INTO ingredient ("name") VALUES ('sel'), ('poivre'), ('huile'), ('pommes de terre'), ('graisse de canard');

COMMIT;
