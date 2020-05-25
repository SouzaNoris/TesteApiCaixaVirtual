import { Categoria } from "../models/categoria";
import { BaseRepositoryInterface } from "../contracts/baseRepositoryInterface";
import { BaseRepository } from "./base/baseRepository";

export class CategoriaRepository extends BaseRepository implements BaseRepositoryInterface<Categoria> {

    protected nameCollection = 'categoria';

    constructor() {
        super();
    }

    insert(dados: Categoria) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .insertOne(dados)
                    .then(() => {
                        return resolve("Dados inseridos com sucesso!");
                    })
                    .catch(err => {
                        return reject(this.messageError(err));
                    });
            });
        });
    }

    update(dados: Categoria) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .updateOne({ id: "0005" } , { $set: dados })
                    .then(() => {
                        return resolve("dados atualizados com sucesso!");
                    })
                    .catch(err => {
                        return reject(this.messageError(err));
                    });
            });
        });
    }

    delete(query: any) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .deleteOne(query)
                    .then((resposta) => {
                        return resolve(resposta);
                    })
                    .catch(err => {
                        return reject(this.messageError(err));
                    });
            });
        });
    }

    search(query: any) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .find(query)
                    .toArray()
                    .then(resposta => {
                        return resolve(resposta);
                    });
            }).catch((error) => {
                return reject(this.messageError(error));
            })
        });
    }
}