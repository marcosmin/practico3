// Importación
import React from "react";
import '../hojas-de-estilo/BotonAtaque.css';

// Definición del componente 'BotonAtaque'
function BotonAtaque({ ataque, onClick }) {

  // Operador ternario para determinar la clase según la opción de ataque
  const botonClase =
    ataque === 'piedra'
    ? 'piedra-usuario'
    : ataque === 'papel'
    ? 'papel-usuario'
    : 'tijera-usuario'
  ;

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className={botonClase}>
      <a>
        <img 
          src={require(`../imagenes/${ataque}-usuario-boton.png`)} 
          alt={ataque} 
          onClick={onClick} 
        />
      </a>
    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default BotonAtaque;