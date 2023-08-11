const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    use: "root",
    password: "",
    database: "tarea1"

})

app.post("/create",(req,res)=>{
    const correo = req.body.correo;
    const numero = req.body.numero;

    db.query('INSERT INTO votos(corre,numero) VALUES(?,?)', [correo,numero],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("empleado exito");
        }
    });
});

app.get("/empleados",(req,res)=>{

    db.query('SELECT * FROM votos',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log("corriendo 3001")
})