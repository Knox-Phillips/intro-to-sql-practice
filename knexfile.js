module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || 5433,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASS || '4465asadx',
      database: process.env.database || 'postgres',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST || '127.0.0.1',
      port: process.env.PG_PORT || 5433,
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASS || '4465asadx',
      database: process.env.database || 'postgres',
    },
  },
};
