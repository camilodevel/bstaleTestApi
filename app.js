const express = require('express');
const app = express();
const router = require('./router');
// Cors esta para poder usar la peticion http desde proyecto
const cors = require('cors');
// process.env.PORT esta por que en heroku agregan el port al servidor, pero si esta en local se abrira con el 5000
const PORT = process.env.PORT || 5000;

app.use(cors())

// Esta es la direccion que se usa en uso local
app.use("/bsaletest/v1/products/", router);

app.listen(PORT, () => {
    console.log('Serrver corriendo en http://localhost:'+PORT);
});