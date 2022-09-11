const express = require('express');
const router = express.Router();
const crud = require("./controllers/crud");

router.
    get("/", crud.listarProductos)
    .get("/:id", crud.listarProductosPorId)
    // .get("/name/:name", crud.listarProductosPorNombre)


module.exports = router;