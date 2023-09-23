// Importación
import React from 'react';
import '../hojas-de-estilo/AreaAtaque.css';
import BotonInterfaz from './BotonInterfaz';

// Definición del componente 'AreaSinAtaque'
function AreaSinAtaque({ reiniciarUsuario }) {

  // Función para cerrar la ventana después de 3 segundos
  const salir = () => {
    setTimeout(() => {
      window.close();
    }, 3000);
  };

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='areaInferior'>

      <div className='comentario'>
        <p>opciones</p>
      </div>

      <div className='areaAtaque'>

        <div  className='botonesInterfaz'>
        <BotonInterfaz 
          accion='cambiarUsuario' 
          onClick={reiniciarUsuario}
          />
        </div>

        <div className='botonesInterfaz'>
          <BotonInterfaz 
            accion='salir'
            onClick={salir} 
            />
        </div>
        
      </div>

    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default AreaSinAtaque;