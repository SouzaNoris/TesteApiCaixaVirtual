import { LancamentoCaixaRepository } from "../../repository/lancamentoCaixaRepository";
import { LancamentoCaixa } from "../../models/lancamentoCaixa";
import { ResumoCarteira } from "../../models/resumoCarteira";

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

    public async resumoMovimentacoes() {
        const movimentacoes = new ResumoCarteira();

        await this.searchLancamentoCaixa({ data: Date.now }).then((result) => {
            movimentacoes.movimentacoes = result;
            let entradas = 0;
            let saidas = 0;

            movimentacoes.movimentacoes.forEach((movimento) => {
                if (movimento.tipo === 'entrada')
                    entradas = entradas + movimento.valor;
                else
                    saidas = saidas + movimento.valor;
            });

            movimentacoes.saldoTotal = entradas - saidas;
        });

        return movimentacoes;
    }
}