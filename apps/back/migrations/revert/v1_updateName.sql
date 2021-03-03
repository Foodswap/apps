-- Revert foodswap:v1_updateName from pg

BEGIN;


ALTER TABLE author RENAME COLUMN city TO "address";

ALTER TABLE author RENAME COLUMN username TO pseudonym;



COMMIT;
