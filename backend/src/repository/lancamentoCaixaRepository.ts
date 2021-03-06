import { BaseRepository } from "./base/baseRepository";
import { BaseRepositoryInterface } from "../../src/contracts/baseRepositoryInterface";
import { LancamentoCaixa } from "../models/repository/lancamentoCaixa";

export class LancamentoCaixaRepository extends BaseRepository implements BaseRepositoryInterface<LancamentoCaixa> {

    protected nameCollection = 'lancamentoCaixa';

    constructor() {
        super();
    }

    insert(dados: LancamentoCaixa) {
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

    update(dados: LancamentoCaixa) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .updateOne({ id: dados.id } , { $set: dados })
                    .then(() => {
                        return resolve("dados atualizados com sucesso!");
                    })
                    .catch(err => {
                        return reject(this.messageError(err));
                    });
            });
        });
    }
    delete(id: { }) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .remove(id)
                    .then((resposta) => {
                        return resolve(resposta);
                    })
                    .catch(err => {
                        return reject(this.messageError(err));
                    });
            });
        });
    }
    search(query: {}) {
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