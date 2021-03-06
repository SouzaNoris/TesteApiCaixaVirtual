import { Categoria } from "../../models/repository/categoria";
import { CategoriaRepository } from "../../repository/categoriaRepository";

export class CategoriaController {
    private categoriaRepository: CategoriaRepository;

    constructor() {
        this.categoriaRepository = new CategoriaRepository();
    }

    public async insertCategoria(dados: Categoria) {
        let result;

        await this.categoriaRepository.insert(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async updateCategoria(dados: Categoria) {
        let result;

        await this.categoriaRepository.update(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async searchCategoria(query: {}) {
        let dados;

        await this.categoriaRepository.search(query)
            .then((response) => {
                dados = response;
            });

        return dados;
    }

    public async deleteCategoria(id: any) {
        let result;

        await this.categoriaRepository.delete(id)
            .then((response) => {
                result = response;
            });

        return result;
    }
}