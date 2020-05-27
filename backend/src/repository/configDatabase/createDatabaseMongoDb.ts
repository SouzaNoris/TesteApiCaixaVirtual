import { MongoClient } from "mongodb";
import fs from "fs";
import { ConfigJson } from "../../models/infra/configJson";

export class CreateDatabaseMongoDb {

    private databaseName: string;

    private url = `mongodb://localhost:27017/${this.databaseName}`;

    constructor() {
        this.getNameDatabase();
    }

    private getNameDatabase(): void {
        fs.readFile('./config/default.json', 'utf-8',
        (err, data) => {
            const jsonData = JSON.parse(data);

            this.databaseName = (jsonData as ConfigJson).database.name;
        });
    }

    private createDatabase() {
        MongoClient.connect(this.url)
            .then((db) => {

                db.close();
            }).catch(err => {
                if (err) throw err;
            });
    }

    private createCollection(nameArrayCollection: string[]) {
        MongoClient.connect(this.url).then(db => {
            const dbo = db.db(this.databaseName);

            nameArrayCollection.forEach(nameCollection => {
                dbo.createCollection(nameCollection).then(() => {
                    db.close();
                }).catch(err => {
                    if (err) throw err;
                });
            });
        }).catch(err => {
            if (err) throw err;
        })
    }

    public initializeDatabase() {
        this.createDatabase();

        const collection = ['usuario', 'categoria', 'lancamentoCaixa']

        this.createCollection(collection);
    }
}


