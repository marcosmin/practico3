// Importación
import React, { useState } from 'react';
import './App.css';
import NombreUsuario from './componentes/NombreUsuario';
import Juego from './componentes/Juego';
import ResultadoFinal from './componentes/ResultadoFinal';

// Definición del componente 'App'
function App() {

  // Estados
  const [pantallaActual, setPantallaActual] = useState(0); // pantalla actual
  const [nombreUsuario, setNombreUsuario] = useState(''); // nombre usuario
  const [ganador, setGanador] = useState(''); // ganador

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div>

      {/* Se muestra pantalla de registro */}
      {pantallaActual === 0 && (
        <NombreUsuario
          onNameSubmit={nombre => {
          setNombreUsuario(nombre);
          setPantallaActual(1);
          }}
        />
      )}

      {/* Se muestra pantalla de juego */}
      {pantallaActual === 1 && (
        <Juego
          nombreUsuario={nombreUsuario}
          ganadorPartida={ganador => {
            setGanador(ganador);
            setPantallaActual(2);
          }}
        />
      )}

      {/* Se muestra pantalla con resultado final */}
      {pantallaActual === 2 && (
        <ResultadoFinal
          ganador={ganador}
          reiniciarUsuario={() => 
            setPantallaActual(0)}
        />
      )}

    </div>
    
  );
}

// Exporta el componente para su uso en otros archivos
export default App;