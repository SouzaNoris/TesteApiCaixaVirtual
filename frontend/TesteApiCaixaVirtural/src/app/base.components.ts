export class BaseComponent {
    constructor() {
        this.stateInsert();
    }

    protected statusTela: string = "Inserindo";

    protected save: boolean = true;
    protected alterar: boolean = false;
    protected search: boolean = true;
    protected delete: boolean = false;
    protected disabledInputs: boolean = false;

    stateInsert() {
        this.save = true;
        this.alterar = false;
        this.search = true;
        this.delete = false;
        this.statusTela = "Inserindo";
        this.disabledInputs = false;
    }

    stateVisible() {
        this.save = false;
        this.alterar = true;
        this.search = true;
        this.delete = true;
        this.statusTela = "Visualizando";
        this.disabledInputs = true;
    }

    stateUpdate() {
        this.save = false;
        this.alterar = false;
        this.search = true;
        this.delete = false;
        this.statusTela = "Alterando";
        this.disabledInputs = false;
    }
}