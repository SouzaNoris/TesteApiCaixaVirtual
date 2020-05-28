import { LancamentoCaixaRepository } from "../../repository/lancamentoCaixaRepository";
import { LancamentoCaixa } from "../../models/repository/lancamentoCaixa";
import { ResumoCarteira } from "../../models/repository/resumoCarteira";

export class LancamentoCaixaController {
    private lancamentoCaixaRepository: LancamentoCaixaRepository;

    constructor() {
        this.lancamentoCaixaRepository = new LancamentoCaixaRepository();
    }

    public async insertLancamentoCaixa(dados: LancamentoCaixa) {
        let result;

        await this.lancamentoCaixaRepository.insert(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async updateLancamentoCaixa(dados: LancamentoCaixa) {
        let result;

        await this.lancamentoCaixaRepository.update(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async searchLancamentoCaixa(query: {}) {
        let dados;

        await this.lancamentoCaixaRepository.search(query)
            .then((response) => {
                dados = response;
            });

        return dados;
    }

    public async deleteLancamentoCaixa(id: {}) {
        let result;

        await this.lancamentoCaixaRepository.delete(id)
            .then((response) => {
                result = response;
            });

        return result;
    }

    public async resumoMovimentacoes(query: {}) {
        const movimentacoes = new ResumoCarteira();

        await this.searchLancamentoCaixa(query).then((result) => {
            movimentacoes.movimentacoes = result;
            let entradas = 0;
            let saidas = 0;

            movimentacoes.movimentacoes.forEach((movimento) => {
                if (movimento.tipo === 'entrada')
                    entradas = parseFloat(entradas.toString()) + parseFloat(movimento.valor.toString());
                else
                    saidas = parseFloat(saidas.toString()) + parseFloat(movimento.valor.toString());
            });

            movimentacoes.saldoTotal = entradas - saidas;
        });

        return movimentacoes;
    }
}