import { Router } from "express";
import { crearUsuarios, listarUsuarios } from "../controllers/tarea.controller.js";

const rutas=Router()

rutas.post('/crear',crearUsuarios)
rutas.get('/listar',listarUsuarios)


export default rutas