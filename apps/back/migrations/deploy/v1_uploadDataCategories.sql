-- Deploy foodswap:v1_uploadDataCategories to pg

BEGIN;

INSERT INTO category ("type", "name") VALUES ('kitchen', 'Pâtes'), ('kitchen', 'Salade'), ('kitchen', 'Américain'), ('kitchen', 'Burgers'), ('kitchen', 'Coréen'), ('kitchen', 'Africain'), ('kitchen', 'Poulet'), ('kitchen', 'Sushi'), ('kitchen', 'Poke Bowl'), ('kitchen', 'Vietnam'), ('kitchen', 'Pizza'), ('kitchen', 'Italien'), ('kitchen', 'Indien'), ('kitchen', 'Thaï'), ('kitchen', 'Oriental'), ('kitchen', 'Japonais'), ('kitchen', 'Turc'), ('kitchen', 'Chinois'), ('kitchen', 'Marocain'), ('kitchen', 'Méditerranéen'), ('kitchen', 'Indien'), ('kitchen', 'Antillais');


COMMIT;
