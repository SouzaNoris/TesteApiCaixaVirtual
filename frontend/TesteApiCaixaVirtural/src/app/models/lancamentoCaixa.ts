import { Categoria } from "./categoria";

export class LancamentoCaixa {
    public id: string;
    public data: Date;
    public categoria: Categoria;
    public tipo: string;
    public valor: number;
    public descricao: string;
    public idLoja: string;
}