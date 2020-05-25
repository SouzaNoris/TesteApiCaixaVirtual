import { LancamentoCaixaRepository } from "../../repository/lancamentoCaixaRepository";
import { LancamentoCaixa } from "../../models/lancamentoCaixa";

export class LancamentoCaixaController {
    private lancamentoCaixaRepository: LancamentoCaixaRepository;

    constructor() {
        this.lancamentoCaixaRepository = new LancamentoCaixaRepository();
    }

    public async insertCategoria(dados: LancamentoCaixa) {
        let result;

        await this.lancamentoCaixaRepository.insert(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async updateCategoria(dados: LancamentoCaixa) {
        let result;

        await this.lancamentoCaixaRepository.update(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async searchCategoria(query: {}) {
        let dados;

        await this.lancamentoCaixaRepository.search(query)
            .then((response) => {
                dados = response;
            });

        return dados;
    }

    public async deleteCategoria(query: {}) {
        let result;

        await this.lancamentoCaixaRepository.delete(query)
            .then((response) => {
                result = response;
            });

        return result;
    }
}