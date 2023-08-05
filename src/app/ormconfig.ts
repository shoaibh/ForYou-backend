import { DataSource } from 'typeorm';
import * as path from 'path';

const entitiesPath = path.join(
  __dirname,
  '../',
  `${process.env.TYPEORM_ENTITIES}`,
);

export const connectionSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5434,
  username: 'root',
  password: 'root',
  database: 'ForYou',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: [entitiesPath],
  migrations: ['src/db/migrations/*.ts'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
