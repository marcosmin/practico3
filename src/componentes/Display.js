// Importación
import React from 'react';
import '../hojas-de-estilo/Display.css';

// Definición del componente 'Display'
function Display({ mensajeDisplay }) {
  
  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='div-display'>
      <p className='display'> {mensajeDisplay} </p>
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default Display;