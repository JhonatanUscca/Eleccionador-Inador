//const mysql = require('mysql')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tarea1'
})

connection.connect((err)=>{
    if(err) throw err
    console.log('Conexion exitosa')
}
)

connection.end()