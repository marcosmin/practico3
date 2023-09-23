// Importación
import React from 'react';
import '../hojas-de-estilo/AreaMaquina.css';
import BarraVida from './BarraVida';
import InformacionJugador from './InformacionJugador';
import Jugada from './Jugada';

// Definición del componente 'AreaMaquina'
function AreaMaquina({ mostrarPuntosMaquina, jugadaTextoMaquina, jugadaImagenMaquina }) {

  // Devuelve la estructura de la interfaz de usuario
  return (

    <div className='column maquina areaDeJuego'>

      <BarraVida 
        nombreJugador = 'maquina'
      />

      <InformacionJugador 
        nombreJugador = 'maquina'
        nombre = 'MAQUINA'
        puntos = {mostrarPuntosMaquina}
      />

      <Jugada 
        nombreJugador = 'maquina'
        jugadaTexto = {jugadaTextoMaquina}
        jugadas={jugadaImagenMaquina}
      />

    </div>

  );
}

// Exporta el componente para su uso en otros archivos
export default AreaMaquina;