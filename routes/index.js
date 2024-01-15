
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || '';
  const hora = req.horaActual || '';

  res.send(`
    <h1>Bienvenido</h1>
    
    <p>La hora actual es: ${hora}</p><br>
    <p>${mensaje}</p>
    <a href="/endroute"><button>Entrar</button> /endroute</a>

  `);
});

module.exports = router;



