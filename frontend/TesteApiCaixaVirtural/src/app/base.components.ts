import { Router } from "@angular/router";

export class BaseComponent {
    constructor(protected router: Router) {
        this.stateInsert();
    }

    protected statusTela: string = "Inserindo";

    protected save: boolean = true;
    protected update: boolean = false;
    protected search: boolean = true;
    protected delete: boolean = false;
    protected showMessage: boolean = false;
    protected message: string = "";

    stateInsert() {
        this.save = true;
        this.update = false;
        this.search = true;
        this.delete = false;
        this.statusTela = "Inserindo";
        this.showMessage = false;
    }
    
    protected new() {
    }

    stateVisible() {
        this.save = false;
        this.update = true;
        this.search = true;
        this.delete = true;
        this.statusTela = "Visualizando";
        this.showMessage = true;
    }

    stateUpdate() {
        this.save = true;
        this.update = false;
        this.search = true;
        this.delete = false;
        this.statusTela = "Alterando";
        this.showMessage = true;
    }

    closeAndRedirect() {
        this.router.navigateByUrl('/');
    }
}