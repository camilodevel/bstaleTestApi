const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');


app.use(cors())

app.use("/bsaletest/v1/products/", router);

app.listen(5000, () => {
    console.log('Serrver corriendo en http://localhost:5000');
});