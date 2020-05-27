import { BaseModelRepository } from "./base/BaseModelRepository";

export class Usuario extends BaseModelRepository {
    public usuario: string;
    public senha: string;
    public idLoja: string;
}