import express from "express";
import tarefasController from "./controllers/tarefasController.js";
import usuariosController from "./controllers/usuariosController.js";
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

app.get("/testedeploy", (req, res)=> {
    res.status(200).send({msg: "Api sendo acessada remotamente"});
});

tarefasController(app)
usuariosController(app)

export default app