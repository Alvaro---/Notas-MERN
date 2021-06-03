const express = require('express');
const cors=require('cors');


const app=express(); //Crea servidor


//setings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(cors());
app.use(express.json());

//routes
/*
app.get('/api/users',(req,res)=>res.send('<h2>Rutas de Usuario</h2>'));
app.get('/api/notes',(req,res)=>res.send('Rutas de Notas'));
*/

app.use('/api/users', require ('./routes/routesUsers'));
app.use('/api/notes', require ('./routes/routesNotes'));

module.exports =app; 