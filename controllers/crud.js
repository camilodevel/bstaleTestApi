const conexion = require('../database/db');

function listarProductos(req, res){
    conexion.query('SELECT id, name, url_image, price, discount, category FROM product', (error, results)=>{
        if(error){
            res.send(error);
            throw error;
        }
        
        if(results.length === 0){
            res.send(
                {
                    data: "ok",
                    resultado: results.length
                }
            );
            return;
        }else{
            res.send(results);
        }
    })
}

function listarProductosPorId(req, res){
    conexion.query(`SELECT id, name, url_image, price, discount, category FROM product WHERE ID = ${req.params.id}`, (error, results)=>{
        if(error){
            res.send(error);
            throw error;
        } 
        
        if(results.length === 0){
            res.send(
                {
                    data: "ok",
                    resultado: results.length
                }
            );
            return;
        } else{
            res.send(results);
        }
    })
}

// function listarProductosPorNombre(req, res){
//     console.log(req.params.name)
//     conexion.query(`SELECT id, name, url_image, price, discount, category FROM product WHERE name = "${req.params.name}"`, (error, results)=>{
//         if(error){
//             res.send(error);
//             // throw error;
//         }else if(results.length === 0){
//             res.send(
//                 {
//                     data: "ok",
//                     resultado: results.length
//                 }
//             );
//             return;
//         }else{
//             res.send(results);
//         }
//     })
// }

module.exports = {
    listarProductos         : listarProductos,
    listarProductosPorId    : listarProductosPorId
};