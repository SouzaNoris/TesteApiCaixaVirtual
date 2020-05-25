import { BaseModelRepository } from "./BaseModelRepository";
import { Categoria } from "./categoria";

export class LancamentoCaixa extends BaseModelRepository {
    public data: Date;
    public categoria: Categoria;
    public tipo: string;
    public valor: string;
    public descricao: string;
}