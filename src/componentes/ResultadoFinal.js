// Importación
import React from 'react';
import '../hojas-de-estilo/ResultadoFinal.css';
import trofeoGanador from '../imagenes/trofeo.png';
import gameOver from '../imagenes/game-over.png';
import AreaSinAtaque from './AreaSinAtaque';
import Titulo from './Titulo';

// Definición del componente 'ResultadoFinal'
function ResultadoFinal({ ganador, reiniciarUsuario }) {

  // Devuelve la estructura de la interfaz de usuario
  return(
    <div className='contenedorResultadoFinal'>

      <div>
        <Titulo />
      </div>

      {/* Muestra un mensaje y una imagen dependiendo del ganador */}
      <div>
        {ganador === 'maquina' ? (
          <div className='div-display'>
            <p className='display'>LA MAQUINA GANA EL JUEGO</p>
            <img src= {gameOver} alt = 'game over' ></img>
          </div>
        ) : (
          <div className='div-display'>
            <p className='display'>FELICITACIONES GANASTE EL JUEGO!!!</p>
            <img className='imagenFinal' src= {trofeoGanador} alt = 'trofeo ganador' ></img>
          </div>
        )}
      </div>
      
      <div className='area-ataque'>
        <AreaSinAtaque 
          reiniciarUsuario={reiniciarUsuario}
        />
      </div>

    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default ResultadoFinal;