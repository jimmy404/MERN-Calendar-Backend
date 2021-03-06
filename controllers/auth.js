const { response } = require('express');

const crearUsuario = (req, res = response) => {

  const { name, email, password } = req.body;

  if( name.length < 5 ) {
    return res.status(400).json({
      ok: false,
      msg: 'El nombre debe ser de 5 letras'
    });
  }

  return res.json({
    ok: true,
    msg: 'Registro',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'Login',
    email,
    password,
  })
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Renew'
  })
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
