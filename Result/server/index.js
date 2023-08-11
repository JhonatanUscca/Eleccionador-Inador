const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "voting"

})
app.post('/addVote', (req, res) => {
    const name = req.body.candidate;
    const instrucSQL = `UPDATE candidate SET votes = votes + 1 WHERE name = '${name}'`;
    db.query(instrucSQL, (err, resultado) => {
      if (err) {
        console.error('Error al actualizar los votos:', err);
        res.status(500).json({ error: 'Error al actualizar los votos' });
      } else {
        res.json({ mensaje: 'Votos actualizados exitosamente' });
      }
    });
});
app.get('/addResults', (req, res) => {
  const instrucSQL = `SELECT name, votes FROM candidate ORDER BY votes DESC LIMIT 1`;
  db.query(instrucSQL, (err, resultado) => {
    if (err) {
      console.log(err);
    } else {
      res.send(resultado);
    }
  });
});

app.listen(8000,()=>{
    console.log("corriendo 8000")
})