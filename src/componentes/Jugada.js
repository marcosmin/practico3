// Importación
import React from 'react';
import '../hojas-de-estilo/Jugada.css';

// Definición del componente 'Jugada'
function Jugada({ nombreJugador, jugadaTexto, jugadas }) {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='jugada'>
      <img
        className={`jugada-${nombreJugador}-imagen`}
        src={require(`../imagenes/${jugadas}-${nombreJugador}.png`)}
        alt={`jugada ${nombreJugador}`}
      />
      <p className={`jugada-${nombreJugador}-texto`}>{jugadaTexto}</p>
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default Jugada;