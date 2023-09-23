// Importación
import React from 'react';
import '../hojas-de-estilo/BotonJugar.css';

// Definición del componente 'BotonJugar'
function BotonJugar({ onClick }) {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <>
      <button 
        className='boton-jugar' 
        onClick={onClick} 
      >JUGAR
      </button>
    </>
  );
}

// Exporta el componente para su uso en otros archivos
export default BotonJugar;