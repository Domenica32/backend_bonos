import cors from 'cors'
import morgan from 'morgan'

//Trae express al servidor
const express = require("express");
const mongoose = require("mongoose");

//inicializa proyecto
const app = express();

// Importacion de rutas 
const empleadoRoute = require("./routes/empleadoRoute.js");
const bonoRoute = require("./routes/bonoRoute.js");

//Configurar body-parser
app.use(morgan('tiny'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conexion con MongoDB 
mongoose.connect("mongodb+srv://Domenica16:m2Nos6nkpzLC3mzo@clusterrd.qohecm4.mongodb.net/proyectoBonos",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

//Test de que la base de datos funciona
if(!db){
    console.log("Error valio Ron todo")
}else{
    console.log("Todo funciona correctamente")
}

//Asigna el puerto
var port = process.env.PORT || 5000;

app.use("/api",empleadoRoute);
app.use("/api",bonoRoute);

const history = require("connect-history-api-fallback");
app.use(history());

// Hacer que escuche el puerto 
app.listen(port, ()=>{
    console.log("localhost:",port)
});