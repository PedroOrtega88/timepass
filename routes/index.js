
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || '';
  const hora = req.horaActual || '';

  res.send(`
    <h1>Bienvenido</h1>
    
    <h3>La hora actual es: ${hora}</h3><br>
    <h4>${mensaje}</h4>
    <a href="/endroute"><button>Entrar</button> /endroute</a>

  `);
});

module.exports = router;



