export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
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
