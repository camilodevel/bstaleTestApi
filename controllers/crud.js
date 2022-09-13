const conexion = require('../database/db');

let productos;

// Funcion para traer los campos de productos y llenarlos en la variable let productos de arriba.
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

// Por si en el futuro se necesitan traer los productos por id de catgoria esta esta funcion.
function listarProductosPorId(req, res){
    conexion.query(`SELECT id, name, url_image, price, discount, category FROM product WHERE category = ${req.params.id}`, (error, results)=>{
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

// Por si en el futuro se necesitan traer los productos por id esta esta funcion.
function listarCategorias(req, res){
    conexion.query(`SELECT id, name FROM category`, (error, results)=>{
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


// buscarProducto es la funcion que se usa para poder buscar los produtos, lo hace con la variable productos que esta al principio
// De este script, esa variable se carga cuando se llama al get productos.
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
    buscarProducto          : buscarProducto,
    listarCategorias        : listarCategorias
};