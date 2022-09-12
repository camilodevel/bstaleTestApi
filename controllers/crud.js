const conexion = require('../database/db');

let productos;

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
            productos = results;
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

function buscarProducto(req, res){

    if(!req.params.palabra){
        res.send(
            {
                data: "ok",
                resultado: productos
            }
        );
        return
    }

    const newArray = []

    for (const producto of productos) {
        let nombre = producto.name.toLowerCase();
        if( nombre.indexOf(req.params.palabra.toLowerCase()) !== -1){
            newArray.push(producto);
        }
    }

    res.send(
        {
            data: "ok",
            resultado: newArray
        }
    );


}


module.exports = {
    listarProductos         : listarProductos,
    listarProductosPorId    : listarProductosPorId,
    buscarProducto          : buscarProducto
};