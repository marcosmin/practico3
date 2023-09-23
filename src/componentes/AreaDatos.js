// Importación
import React from 'react';
import '../hojas-de-estilo/AreaDatos.css';
import MarcadorRound from './MarcadorRound';
import Display from './Display';

// Definición del componente 'AreaDatos'
function AreaDatos({ mostrarRound, mensajeDisplay }) {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='datos'>
      <MarcadorRound 
        round={mostrarRound}
      />
      <Display 
        mensajeDisplay={mensajeDisplay}
      />
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default AreaDatos;