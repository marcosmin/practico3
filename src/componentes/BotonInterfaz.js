// Importación
import React, { useState } from 'react';
import '../hojas-de-estilo/BotonInterfaz.css';
import audioBeepHover from '../sonidos/beep-hover.mp3';

// Definición del componente 'BotonInterfaz'
function BotonInterfaz(props) {
  
  const [reproduciendo, setReproduciendo] = useState(false);
  const sonidoBeepHover = new Audio(audioBeepHover);

  // Manejador de eventos para cuando el cursor entra en el botón
  const handleMouseEnter = () => {
    if (!reproduciendo) {
      sonidoBeepHover.play();
      setReproduciendo(true);
    }
  };

  // Manejador de eventos para cuando el cursor sale del botón
  const handleMouseLeave = () => {
    if (reproduciendo) {
      sonidoBeepHover.pause();
      sonidoBeepHover.currentTime = 0;
      setReproduciendo(false);
    }
  };

  // Devuelve la estructura de la interfaz de usuario
  return (
    <button 
      class={props.accion} type="button">
      <img 
        src={require(`../imagenes/${props.accion}.png`)} 
        alt={props.accion}
        onClick={props.onClick} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </button>
  );
}

// Exporta el componente para su uso en otros archivos
export default BotonInterfaz;