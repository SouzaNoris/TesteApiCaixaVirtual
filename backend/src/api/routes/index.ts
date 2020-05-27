import * as express from "express";
import { CategoriaController } from "../controllers/categoria.controller";
import { LancamentoCaixaController } from "../controllers/lancamentoCaixa.controllers";

export const register = (app: express.Application) => {
    app.get('/', (err, res) => {
        res.send("Hello world!");
    });

    // Categoria
    app.post("/api/v1/categoria", (req: any, res) => {
        const categoriaController = new CategoriaController();

        categoriaController.insertCategoria(req.body)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    });

    app.put("/api/v1/categoria", (req: any, res) => {
        const categoriaController = new CategoriaController();

        categoriaController.updateCategoria(req.body)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    });

    app.post("/api/v1/categoria/search", (req, res) => {
        const categoriaController = new CategoriaController();

        categoriaController.searchCategoria(req.body).then((r) => {
            res.json(r);
        })
            .catch((error) => {
                res.send(404);
                res.json(error);
            })
    });

    app.delete("/api/v1/categoria", (req, res) => {
        const categoriaController = new CategoriaController();

        categoriaController.deleteCategoria(req.query).then((r) => {
            res.json(r);
        })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    });

    // LancamentoCaixa
    app.post("/api/v1/lancamentoCaixa", (req: any, res) => {
        const lancamentoCaixaController = new LancamentoCaixaController();

        lancamentoCaixaController.insertLancamentoCaixa(req.body)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    });

    app.put("/api/v1/lancamentoCaixa", (req: any, res) => {
        const lancamentoCaixaController = new LancamentoCaixaController();

        lancamentoCaixaController.updateLancamentoCaixa(req.body)
            .then((resposta) => {
                res.json(resposta);
            })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    });

    app.post("/api/v1/lancamentoCaixa/search", (req, res) => {
        const lancamentoCaixaController = new LancamentoCaixaController();

        lancamentoCaixaController.searchLancamentoCaixa(req.body).then((r) => {
            res.json(r);
        })
            .catch((error) => {
                res.send(404);
                res.json(error);
            })
    });

    app.delete("/api/v1/lancamentoCaixa", (req, res) => {
        const lancamentoCaixaController = new LancamentoCaixaController();

        lancamentoCaixaController.deleteLancamentoCaixa(req.query).then((r) => {
            res.json(r);
        })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    });

    app.post("/api/v1/lancamentoCaixa/resumo", (req, res) => {
        const lancamentoCaixaController = new LancamentoCaixaController();

        lancamentoCaixaController.resumoMovimentacoes().then((r) => {
            res.json(r);
        })
            .catch((error) => {
                res.send(404);
                res.json(error);
            })
    });
}