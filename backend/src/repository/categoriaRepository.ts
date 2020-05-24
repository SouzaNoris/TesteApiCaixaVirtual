import { Categoria } from "../models/categoria";
import { BaseRepositoryInterface } from "../contracts/baseRepositoryInterface";
import { BaseRepository } from "./base/baseRepository";

export class CategoriaRepository extends BaseRepository implements BaseRepositoryInterface<Categoria> {

    protected nameCollection = 'categoria';

    constructor() {
        super();
    }

    insert(dados: Categoria) {
        this.collection.insertOne(dados)
            .then(() => {
                this.closeConnectionDatabase();
            })
            .catch(err => {
                this.messageError(err);
            });
    }

    update(dados: Categoria): void {
        const query = { id: dados.id };

        this.collection.updateOne(query, dados)
            .then(() => this.closeConnectionDatabase())
            .catch(err => {
                this.messageError(err);
            });
    }

    delete(dados: Categoria): any {
        const query = { id: dados.id }
        this.collection.deleteOne(query)
            .then(() => this.closeConnectionDatabase())
            .catch(err => this.messageError(err));
    }

    search(query: {}): Categoria[] {
        let dadosRetorno: Categoria[];

        this.collection.find<Categoria>(query)
            .toArray()
            .then((result) => {
                this.closeConnectionDatabase();
                dadosRetorno = result;
            })
            .catch(err => this.messageError(err));

        return dadosRetorno;
    }
}