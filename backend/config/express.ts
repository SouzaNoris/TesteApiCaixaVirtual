import express from "express";
import * as bodyParser from "body-parser";
import config from "config";
import * as routes from "../src/api/routes";
import { CreateDatabaseMongoDb } from "../src/repository/configDatabase/createDatabaseMongoDb";

export const app = express();

app.set('port', process.env.PORT || config.get('server.port'));
app.set('databaseName', config.get('database.name'));

app.use(bodyParser.json());

// Config Database
const createDatabaseMongoDb = new CreateDatabaseMongoDb();
createDatabaseMongoDb.initializeDatabase();

// Rotas
routes.register(app);
