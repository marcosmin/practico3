// Importación
import React, { useState } from 'react';
import '../hojas-de-estilo/NombreUsuario.css';
import Titulo from './Titulo';
import Display from './Display';
import BotonJugar from './BotonJugar';
import audioErrorPlay from '../sonidos/error_play.wav';
import audioClickPlay from '../sonidos/click_play.wav';

const sonidoErrorPlay = new Audio(audioErrorPlay);
const sonidoClickPlay = new Audio(audioClickPlay);

// Definición del componente 'NombreUsuario'
function NombreUsuario ({ onNameSubmit }) {

  // Estado para gestionar el nombre y el mensaje de visualización
  const [nombre, setNombre] = useState('');
  const [display, setDisplay] = useState('Hola! como te llamas?');

  // Función para manejar cambios en el input de nombre
  function handleNameChange(event) {
    setNombre(event.target.value);
  }

  // Funcion para procesar y validar el nombre de usuario ingresado
  function procesarNombreUsuario() {
    if (nombre === '') {
      sonidoErrorPlay.play();
      setDisplay('Ingresá tu nombre por favor');
    } else {
      sonidoClickPlay.play();
      onNameSubmit(nombre.trim().toUpperCase());
    }
  }

  // Manejador de eventos para la tecla 'Enter' en el input de nombre
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      procesarNombreUsuario();
    }
  }

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='datos'>

      <div>
        <Titulo />
      </div>

      <div className='datos2'>

        <div>
          <Display mensajeDisplay={display} />
        </div>

        <div className='nombre'>
          <input 
            className='input-nombre' 
            type='text' 
            value={nombre}
            onChange={handleNameChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div>
          <BotonJugar onClick={procesarNombreUsuario} />
        </div>

      </div>

    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default NombreUsuario;