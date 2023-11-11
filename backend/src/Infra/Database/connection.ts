import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Contacts } from "../../Entities/contact";
import { Quotes } from "../../Entities/quote";

const AppDataSource = new DataSource({
  type: "postgres",
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  synchronize: false,
  logging: false,
  entities: [Contacts, Quotes],
  migrations: process.env.NODE_ENV === 'production' ? [] : ['./src/Migrations/*.{ts,js}'],
  ssl: {
    rejectUnauthorized: false,
  },
});

export { AppDataSource };
