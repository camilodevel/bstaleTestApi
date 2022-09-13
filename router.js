const express = require('express');
const router = express.Router();
const crud = require("./controllers/crud");

router.
    get("/", crud.listarProductos)
    .get("/buscar/categoria/:id", crud.listarProductosPorId)
    .get("/buscar/texto/:palabra", crud.buscarProducto)
    .get("/todas/categorias/", crud.listarCategorias)


module.exports = router;