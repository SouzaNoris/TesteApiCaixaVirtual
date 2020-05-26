import express from "express";
import * as bodyParser from "body-parser";
import config from "config";
import * as routes from "../src/api/routes";
import { CreateDatabaseMongoDb } from "../src/repository/configDatabase/createDatabaseMongoDb";
import  cors from "cors";

export const app = express();

app.set('port', process.env.PORT || config.get('server.port'));
app.set('databaseName', config.get('database.name'));

const corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Config Database
const createDatabaseMongoDb = new CreateDatabaseMongoDb();
createDatabaseMongoDb.initializeDatabase();

// Rotas
routes.register(app);
