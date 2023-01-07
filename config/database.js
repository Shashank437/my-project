module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cesrbko2i3mh51vhj670-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_db_wr8x'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'or0hCjW95gkM04M0cYR7YsNOKj645Aow'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});