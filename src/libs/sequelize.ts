import { Sequelize } from "sequelize";
import { config } from "../config/config";
import {setupModels} from '../db/models'

const USER = encodeURIComponent(config.dbUser as string);
const PASSWORD = encodeURIComponent(config.dbUser as string);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
});

setupModels(sequelize)

sequelize.sync()
