const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors())

app.use("/bsaletest/v1/products/", router);

app.listen(PORT, () => {
    console.log('Serrver corriendo en http://localhost:'+PORT);
});