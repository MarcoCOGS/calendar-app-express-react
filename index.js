const express = require('express');
require('dotenv').config()
const cors=require('cors')
const { dbConnection } = require('./database/config');

//crear servidor de express
//console.log(process.env)
const app = express()
//Base de datos

dbConnection()

//CORS
app.use(cors())

//Directorio publico
app.use(express.static('public'))// use es un midleware y cuando abres la app en google , entra a use

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth',require('./routes/auth'))
app.use('/api/events',require('./routes/events'))
//TODO: CRUD: Eventos



//Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})