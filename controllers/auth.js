
const crearUsuario = (req, res) => {
  res.json({
    ok: true,
    msg: 'Registro'
  })
};

const loginUsuario = (req, res) => {
  res.json({
    ok: true,
    msg: 'Login'
  })
};

const revalidarToken = (req, res) => {
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
