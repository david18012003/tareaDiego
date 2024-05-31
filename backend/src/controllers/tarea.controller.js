import { pool } from "../../db/conexion.js"


export const crearUsuarios = async (req, res) => {

    try {
       
        const{cedula,nombre} = req.body
        
        let sql = `INSERT INTO user (cedula,nombre) values (?, ?)`

        const[rows] = await pool.query(sql, [cedula,nombre])

        if(rows.affectedRows>0){
            res.status(200).json({
                'status': 200,
                'message': 'Se realizo el registro con exito'
            })
        } else {
            res.status(403).json({
                'status': 403,
                'message': 'No se registro el resultado'
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error de servidor' + error
        })
    }
}

export const listarUsuarios = async(req,res)=>{
    try {
        let sql = `SELECT * FROM user`

            const [result] = await pool.query(sql)

        if(result.length>0){
            res.status(200).json(result)
        } else {
            res.status(403).json({
                'status': 403,
                'message': 'No se encontraron usuarios '
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error de servidor' + error
        })
    }
}