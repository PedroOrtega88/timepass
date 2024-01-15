
const validarHora = (req, res, next) => {
  const horaActual = parseInt(req.horaActual.split(':')[0], 10);
  
  if (horaActual >= 12 && horaActual <= 24) {
 
    next();
  } else {
  
    res.locals.mensaje = "Aún no son las 12 de la mañana.";
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
};

module.exports = { validarHora };
