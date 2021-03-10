-- Deploy foodswap:v1_updateMealPics to pg

BEGIN;

ALTER TABLE meal ADD picture_path TEXT;

COMMIT;
