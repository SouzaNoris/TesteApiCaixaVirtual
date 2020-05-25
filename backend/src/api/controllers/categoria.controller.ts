import { Categoria } from "../../models/categoria";
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

    public async deleteCategoria(query: {}) {
        let result;

        await this.categoriaRepository.delete(query)
            .then((response) => {
                result = response;
            });

        return result;
    }
}