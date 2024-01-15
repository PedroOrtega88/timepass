
const obtenerHoraActual = (req, res, next) => {
  const ahora = new Date();
  const horaActual = ahora.getHours();
  const minutos = ahora.getMinutes();

  req.horaActual = `${horaActual}:${minutos}`;
  next();
};

module.exports = { obtenerHoraActual };

