// Importación
import React from 'react';
import '../hojas-de-estilo/AreaAtaque.css';
import BotonInterfaz from './BotonInterfaz';
import BotonAtaque from "./BotonAtaque";

// Definición del componente 'AreaAtaque'
function AreaAtaque({ jugar, reiniciarJuego, mostrarBotonInterfaz, mostrarBotonAtaque }) {

  // Función para cerrar la ventana después de 3 segundos
  const salir = () => {
    setTimeout(() => {
      window.close();
    }, 3000);
  };

  // Funciones para manejar la elección del jugador: piedra, papel o tijera
  const eleccionPiedra = () => {
    jugar('PIEDRA');
  }

  const eleccionPapel = () => {
    jugar('PAPEL');
  }

  const eleccionTijera = () => {
    jugar('TIJERA');
  }

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='areaInferior'>

      <div className='comentario'>
        <p>Elije un ataque!</p>
      </div>

      <div className='areaAtaque'>

        <div className='botonesInterfaz'>
          {mostrarBotonInterfaz && <BotonInterfaz 
          accion='reiniciar' 
          onClick={reiniciarJuego}
          />}
        </div>

        <div className='botonesAtaque'>

          {mostrarBotonAtaque && <BotonAtaque 
            ataque='piedra'
            onClick={eleccionPiedra} 
          />}

          {mostrarBotonAtaque && <BotonAtaque 
            ataque='papel' 
            onClick={eleccionPapel} 
          />}

          {mostrarBotonAtaque && <BotonAtaque 
            ataque='tijera'
            onClick={eleccionTijera} 
          />}
          
        </div>

        <div className='botonesInterfaz'>
          {mostrarBotonInterfaz && <BotonInterfaz 
            accion='salir'
            onClick={salir} 
          />}
        </div>
        
      </div>

    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default AreaAtaque;