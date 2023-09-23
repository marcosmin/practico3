// Importación
import React from 'react';
import '../hojas-de-estilo/Header.css';
import Titulo from './Titulo';
import Avatar from './Avatar';

// Definición del componente 'Header'
function Header() {

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='header'>
      <Avatar nombreJugador = 'usuario' />
      <div></div>
      <Titulo />
      <div></div>
      <Avatar nombreJugador = 'maquina' />
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default Header;