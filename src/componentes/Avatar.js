// Importación
import React from 'react';
import '../hojas-de-estilo/Avatar.css';

// Definición del componente 'Avatar'
function Avatar({ nombreJugador }) {
  
  // Devuelve la estructura de la interfaz de usuario
  return (
    // Imagen Avatar
    <div className='avatar'>
      <img src={require(`../imagenes/${nombreJugador}.png`)} alt={`avatar ${nombreJugador}`} />
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default Avatar;