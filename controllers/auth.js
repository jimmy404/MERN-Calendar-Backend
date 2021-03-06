const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {

  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({email});
    if(usuario){
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario ya existe con ese correo'
      });
    }

    usuario = new Usuario(req.body);

    //Encriptar password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    return res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el Admin'
    })
  }

};

const loginUsuario = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    const usuario = await Usuario.findOne({email});
    if(!usuario){
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario no existe con ese correo'
      });
    }

    // Confirmar passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if(validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password'
      })
    }

    // Generar JWT
    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name

    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el Admin'
    })
  }

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
