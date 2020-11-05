export default {
  type: 'mysql',
  host: process.env.DB_HOSTNAME || 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME || 'test',
  password: process.env.DB_PASSWORD || 'test',
  database: process.env.DB_DATABASE || 'test',
  synchronize: false,
  logging: false,
  entities: ['api/entity/**/*.ts'],
  migrations: ['api/migration/**/*.ts'],
  subscribers: ['api/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'api/entity',
    migrationsDir: 'api/migration',
    subscribersDir: 'api/subscriber',
  },
}
