const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'admin',
    database: 'clientsdb'

});

module.export = conection;