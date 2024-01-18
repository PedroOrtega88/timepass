
const validarHora = (req, res, next) => {
  const obtenerHoraActual = (horaString) => {
    let hora = 0;
  
    
    if (horaString.length >= 2) {
      
      hora = Number(horaString.substring(0, 2));
    }
  
    return hora;
  };
  
  // Uso de la función
  const horaActual = obtenerHoraActual(req.horaActual);
  if (horaActual >= 12 && horaActual <= 24) {
 
    next();
  } else {
  
    res.locals.mensaje = "Aún no son las 12 de la mañana.";
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
};

module.exports = { validarHora };
