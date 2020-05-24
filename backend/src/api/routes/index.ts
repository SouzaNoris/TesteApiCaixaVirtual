import * as express from "express";
import { CategoriaController } from "../controllers/categoria.controller";
import { Categoria } from "../../models/categoria";

export const register = (app: express.Application) => {
    app.get('/', (err, res) => {
        res.send("Hello world!");
    });

    // Categoria
    app.get("/api/v1/categoria/search", (req: any, res) => {
        const categoriaController = new CategoriaController();

        res.send(categoriaController.searchCategoria(new Categoria()));
    });
}