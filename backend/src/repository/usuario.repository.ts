import { BaseRepositoryInterface } from "../contracts/baseRepositoryInterface";
import { BaseRepository } from "./base/baseRepository";
import { Usuario } from "../models/repository/usuario";

export class UsuarioRepository extends BaseRepository implements BaseRepositoryInterface<Usuario> {

    protected nameCollection = 'usuario';

    constructor() {
        super();
    }

    insert(dados: Usuario) {
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

    update(dados: Usuario) {
        return new Promise((resolve, reject) => {
            this.getConnectionDatabase().then((db) => {
                db.db(this.databaseName)
                    .collection(this.nameCollection)
                    .updateOne({ id: dados.id } , { $set: dados })
                    .then(() => {
                        return resolve("Dados atualizados com sucesso!");
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