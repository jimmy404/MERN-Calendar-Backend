const { response } = require('express');

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Obtener eventos'
  })
};

const crearEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Crear evento'
  })
};

const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Actualizar eventos'
  })
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Eliminar eventos'
  })
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
