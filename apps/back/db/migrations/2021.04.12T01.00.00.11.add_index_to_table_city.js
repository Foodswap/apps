async function up({ context: queryInterface }) {
  await queryInterface.sequelize.query(`
    CREATE EXTENSION pg_trgm; 
    CREATE INDEX trgm_idx_city_name ON city USING gin (name gin_trgm_ops);
    CREATE INDEX trgm_idx_city_zip_code ON city USING gin (zip_code gin_trgm_ops);
  `);
}

async function down({ context: queryInterface }) {
  await queryInterface.sequelize.query(`
    DROP INDEX IF EXISTS trgm_idx_city_name; 
    DROP INDEX IF EXISTS trgm_idx_city_zip_code; 
    DROP EXTENSION IF EXISTS pg_trgm
  `);
}

module.exports = { up, down };
