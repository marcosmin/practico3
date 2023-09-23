import React from "react";
import '../hojas-de-estilo/AreaJuego.css';
import AreaUsuario from "./AreaUsuario";
import AreaDatos from "./AreaDatos";
import AreaMaquina from "./AreaMaquina";

function AreaJuego() {
  return (
    <div className='areaJuego'>

      <div className='areaUsuario'>
        <AreaUsuario />
      </div>

      <div className='areaDatos'>
        <AreaDatos />
      </div>

      <div className='areaMaquina'>
        <AreaMaquina />
      </div>

    </div>
  );

}

export default AreaJuego;