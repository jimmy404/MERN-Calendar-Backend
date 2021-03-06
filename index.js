const express = require('express');

// Crear servidor express
const app = express();

// Rutas
app.get('/', (req, res) => {
  console.log('Se require el /');
  res.json({
    ok: true
  })
});

// Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`)
});


