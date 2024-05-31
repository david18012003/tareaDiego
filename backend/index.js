import express  from "express";
import body_parser from 'body-parser'
import cors from 'cors'
import rutas from "./src/routes/tarea.route.js";

const servidor = express();

servidor.use(cors());

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extend: false}))

servidor.use(rutas)

//listen 
servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
