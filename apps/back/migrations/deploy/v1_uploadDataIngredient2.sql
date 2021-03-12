-- Deploy foodswap:v1_uploadDataIngredient2 to pg

BEGIN;

INSERT INTO ingredient ("name") VALUES ('Oeufs'), ('Farine'), ('Riz'), ('Pâtes'), ('Sucre'), ('Beurre'), ('Lait'), ('Huile d`olive'), ('Vinaigre'), ('Thon'), ('Viande hachée'), ('Carotte'), ('Epinard'), ('Jambon'), ('Ail'), ('Oignons'), ('Echalotte'), ('Fromage'), ('Vin'), ('Tomates'), ('Moutarde'), ('Levure'), ('Citron'), ('Crème fraîche'), ('Bouillon'), ('Fruits secs'), ('Yaourt'), ('Epices'), ('Fines herbes'), ('Miel'), ('Boeuf'), ('Poisson'), ('Algues'), ('Volaille'), ('Chocolat'), ('Olive'), ('Salade'), ('Curry');


COMMIT;
