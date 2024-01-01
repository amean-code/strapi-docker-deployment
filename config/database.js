const path = require('path');

module.exports = ({ env }) => {

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'ehs-db.postgres.database.azure.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapiTest'),
        user: env('DATABASE_USERNAME', 'ehsdbadmin'),
        password: env('DATABASE_PASSWORD', 'Amean1415'),
        // schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: env('DATABASE_SSL', true)
      },
      debug: false,
    },
  };
};