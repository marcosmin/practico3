// Importación
import React from 'react';
import '../hojas-de-estilo/MarcadorRound.css';

// Definición del componente 'MarcadorRound'
function MarcadorRound({ round }) {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='marcador-round'>
      <p className='round'>ROUND {round}</p>
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default MarcadorRound;