
const express = require('express');
const { obtenerHoraActual } = require('./middlewares/horaMiddleware');
const { validarHora } = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(obtenerHoraActual);

// Rutas
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});