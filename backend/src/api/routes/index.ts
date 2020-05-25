import * as express from "express";
import { CategoriaController } from "../controllers/categoria.controller";

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

    app.delete("/api/v1/categoria/delete", (req, res) => {
        const categoriaController = new CategoriaController();

        categoriaController.deleteCategoria(req.body).then((r) => {
            res.json(r);
        })
            .catch((error) => {
                res.send(404);
                res.json(error);
            });
    })
}