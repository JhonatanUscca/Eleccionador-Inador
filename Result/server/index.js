// Importación de las librerías necesarias
const express = require("express");  // Importa Express para crear el servidor
const app = express();  // Crea una instancia de la aplicación Express
const mysql = require("mysql");  // Importa la librería MySQL para interactuar con la base de datos
const cors = require("cors");  // Importa CORS para manejar la política de mismo origen

// Configuración de middlewares
app.use(cors());  // Habilita CORS para permitir solicitudes desde diferentes dominios
app.use(express.json());  // Habilita el uso de JSON en las solicitudes y respuestas

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: "localhost",  // Host de la base de datos
    user: "root",  // Usuario de la base de datos
    password: "",  // Contraseña de la base de datos
    database: "voting"  // Nombre de la base de datos a utilizar
});

// Definición de una ruta GET para obtener los resultados
app.get('/addResults', (req, res) => {
    const instrucSQL = `SELECT name, votes FROM candidate ORDER BY votes DESC LIMIT 1`;  // Consulta SQL para obtener el candidato con más votos
    db.query(instrucSQL, (err, resultado) => {
        if (err) {
            console.log(err);
        } else {
            res.send(resultado);  // Envia los resultados como respuesta
        }
    });
});

// Inicia el servidor en el puerto 8000
app.listen(8000, () => {
    console.log("corriendo 8000");
});
