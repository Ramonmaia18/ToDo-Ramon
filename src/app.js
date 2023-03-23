import express from "express";
import tarefasController from "./controllers/tarefasController.js";
import usuariosController from "./controllers/usuariosController.js";
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

tarefasController(app)
usuariosController(app)

export default app