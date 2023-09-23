// Importación
import React from "react";
import '../hojas-de-estilo/BarraVida.css';

// Definición del componente 'BarraVida'
function BarraVida({ nombreJugador }) {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className={`barraVida-${nombreJugador}`}>
      <div className={`barra-verde-${nombreJugador}`} />
      <div className={`barra-roja-${nombreJugador}`} />
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default BarraVida;