import { app } from "../config/express";

const port = app.get('port');

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Servidor rodando na porta ${port}`);
});