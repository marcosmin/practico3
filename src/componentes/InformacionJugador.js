// Importación
import React from 'react';
import '../hojas-de-estilo/InformacionJugador.css';

// Definición del componente 'InformacionJugador'
function InformacionJugador({ nombreJugador, nombre, puntos }) {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className={`informacion-${nombreJugador}`}>
      <p className={`nombre-${nombreJugador}`}>{nombre}</p>
      <p className={`puntos-${nombreJugador}`}>{puntos}</p>
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default InformacionJugador;