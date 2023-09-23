// Importación
import React from 'react';
import '../hojas-de-estilo/AreaUsuario.css';
import BarraVida from './BarraVida';
import InformacionJugador from './InformacionJugador';
import Jugada from './Jugada';

// Definición del componente 'AreaUsuario'
function AreaUsuario({ nombreUsuario, puntosUsuario, jugadaTextoUsuario, jugadaImagenUsuario }) {

  // Devuelve la estructura de la interfaz de usuario
  return (

    <div className='column usuario'>

      <BarraVida 
        nombreJugador='usuario'
      />

      <InformacionJugador 
        nombreJugador='usuario'
        nombre={nombreUsuario}
        puntos={puntosUsuario} 
      />

      <Jugada 
        nombreJugador='usuario'
        jugadaTexto={jugadaTextoUsuario}
        jugadas={jugadaImagenUsuario}
      />

    </div>

  );
}

// Exporta el componente para su uso en otros archivos
export default AreaUsuario;