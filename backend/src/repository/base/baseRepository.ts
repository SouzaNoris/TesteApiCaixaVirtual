import { MongoClient } from "mongodb";
import { ConfigJson } from "../../models/configJson";
import fs from "fs";

export abstract class BaseRepository {
    private database: MongoClient;
    protected abstract nameCollection: string;

    constructor() {
        this.getNameDatabase();
        this.initializeConnectionDatabase();
    }

    private databaseName: string;

    private url = `mongodb://localhost:27017/${this.databaseName}`;

    private getNameDatabase(): void {
        fs.readFile('./config/default.json', 'utf-8',
        (err, data) => {
            const jsonData = JSON.parse(data) as ConfigJson;

            this.databaseName = jsonData.database.name;

            alert(this.databaseName);
        });
    }

    protected get connectionDbo() {
        return this.database.db(this.databaseName);
    }

    protected get collection() {
        return this.connectionDbo.collection(this.nameCollection);
    }

    protected closeConnectionDatabase() {
        this.database.close();
    }

    protected messageError(err: string): void {
        // console.log(`Erro ao inserir dados em ${this.nameCollection} - ${err}`);
    }

    private initializeConnectionDatabase() {
        MongoClient.connect(this.url).then(db => {
            this.database = db;
        }).catch();
    }
}