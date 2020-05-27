import { UsuarioRepository } from "../../repository/usuario.repository";
import { Usuario } from "../../models/repository/usuario";

export class UsuarioController {
    private usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    public async insertCategoria(dados: Usuario) {
        let result;

        await this.usuarioRepository.insert(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async updateCategoria(dados: Usuario) {
        let result;

        await this.usuarioRepository.update(dados)
            .then((resposta) => {
                result = resposta;
            });

        return result;
    }

    public async searchCategoria(query: {}) {
        let dados;

        await this.usuarioRepository.search(query)
            .then((response) => {
                dados = response;
            });

        return dados;
    }

    public async deleteCategoria(id: any) {
        let result;

        await this.usuarioRepository.delete(id)
            .then((response) => {
                result = response;
            });

        return result;
    }
}
