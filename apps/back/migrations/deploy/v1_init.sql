-- Deploy foodswap:v1_init to pg

BEGIN;

CREATE TABLE author (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pseudonym VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    "password" VARCHAR(200) NOT NULL,
    "address" TEXT NOT NULL
);

CREATE TABLE category (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64) NOT NULL
);

CREATE TABLE meal (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "created_date" TIMESTAMPTZ DEFAULT NOW(),
    portion INT NOT NULL,
    city VARCHAR(200) NOT NULL,
    "online" BOOLEAN NOT NULL,
    author_id INT REFERENCES author(id)
);

CREATE TABLE meal_category_associate (
    id_meal INT REFERENCES meal(id),
    id_category INT REFERENCES category(id)
);

CREATE TABLE ingredient (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(64) NOT NULL UNIQUE
);

CREATE TABLE meal_ingredient_associate (
    id_meal INT REFERENCES meal(id),
    id_ingredient INT REFERENCES ingredient(id)
);

CREATE TABLE swap (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "status" INT NOT NULL,
    "date" TIMESTAMPTZ DEFAULT NOW(),
    requested_meal_id INT REFERENCES meal(id),
    offered_meal_id INT REFERENCES meal(id)
);

COMMIT;
