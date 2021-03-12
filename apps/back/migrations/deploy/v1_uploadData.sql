-- Deploy foodswap:v1_uploadData to pg

BEGIN;

INSERT INTO category ("type", "name") VALUES ('dish', 'entrée'), ('dish', 'plat'), ('dish', 'dessert'), ('kitchen', 'européenne'), ('kitchen', 'asiatique');

COMMIT;
