
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a /endroute</h1>
    <h3>Bienvenido a la ruta final!</h3>
    
  `);
});

module.exports = router;

