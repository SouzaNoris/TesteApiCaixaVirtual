import { MongoClient } from "mongodb";
import { ConfigJson } from "../../models/configJson";
import fs from "fs";

export abstract class BaseRepository {
    protected abstract nameCollection: string;

    constructor() {
        this.getNameDatabase();
    }

    protected databaseName: string;

    private url = `mongodb://localhost:27017/${this.databaseName}`;

    private getNameDatabase(): void {
        fs.readFile('./config/default.json', 'utf-8',
        (err, data) => {
            const jsonData = JSON.parse(data);

            this.databaseName = (jsonData as ConfigJson).database.name;
        });
    }

    protected async getConnectionDatabase(): Promise<MongoClient> {
        return new Promise((resolve, reject) => {
            MongoClient.connect(this.url).then((db) => {
                resolve(db);
            }).catch((error) => {
                reject(error);
            })
        });
    }

    protected messageError(err: string): string {
       return `Erro ao inserir dados em ${this.nameCollection} - ${err}`;
    }
}