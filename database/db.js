const mysql = require('mysql');

// const conexion = mysql.createConnection({
//     host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//     user: 'bsale_test',
//     password : 'bsale_test',
//     database: 'bsale_test'
// });

// conexion.connect((error) => {
//     if(error){
//         console.error('El error de conexión es: '+ error);
//         return
//     }
//     console.log('¡Conectado a la DB MySql!');
// });

//  Aqui se crea es variable con createPool, para que no se caiga el servidor al esperar.
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user            : 'bsale_test',
    password        : 'bsale_test',
    database        : 'bsale_test'
  });
  
  pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
  });

module.exports = pool;