const express = require('express');
require('dotenv').config();


// Crear servidor express
const app = express();

// Rutas
// app.get('/', (req, res) => {
//   console.log('Se require el /');
//   res.json({
//     ok: true
//   })
// });

// Directorio publico
app.use(express.static('public'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});


