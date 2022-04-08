import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  synchronize: false,
  migrationsRun: true,
  logging: true,
  entities: [`${__dirname}/src/**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/src/**/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};

export = config;
