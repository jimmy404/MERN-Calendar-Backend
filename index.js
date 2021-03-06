const express = require('express');
require('dotenv').config();


// Crear servidor express
const app = express();

// Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: eventos

// Directorio publico
app.use(express.static('public'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});


