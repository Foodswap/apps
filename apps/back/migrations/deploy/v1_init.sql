-- Deploy foodswap:v1_init to pg

BEGIN;

CREATE TABLE author (
    id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pseudonym VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    "password" VARCHAR(200) NOT NULL,
    "address" TEXT NOT NULL
);

CREATE TABLE category (
    id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    meal_id INT REFERENCES meal(id)
    
);

CREATE TABLE meal (
    id GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" VARCHAR(200) NOT NULL,
    descritpion TEXT NOT NULL,
    portion INT NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "online" BOOLEAN NOT NULL,
    auhtor_id INT REFERENCES author(id),
    -- ingredient_id INT REFERENCES ingredient(id)
);

CREATE TABLE ingredient (
    id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(64) NOT NULL UNIQUE 
    meal_id INT REFERENCES meal(id)
);

CREATE TABLE swap (
    id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "status" INT NOT NULL,
    "date" TIMESTAMPTZ DEFAULT NOW(),
    requested_meal_id INT 
)

COMMIT;
