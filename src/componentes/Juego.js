// Importaciones
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/Juego.css';
import AreaUsuario from './AreaUsuario';
import AreaDatos from './AreaDatos';
import AreaMaquina from './AreaMaquina';
import AreaAtaque from './AreaAtaque';
import Header from './Header';
import audioVictoriaFinal from '../sonidos/victoria_final.mp3';
import audioDerrotaFinal from '../sonidos/derrota_final.mp3';
import audioVictoriaParcial from '../sonidos/victoria_parcial.mp3';
import audioDerrotaParcial from '../sonidos/derrota_parcial.mp3';

// Definición del componente 'Juego'
function Juego({ nombreUsuario, ganadorPartida }) {

  // Declaración de estados utilizando useState
  const [jugadaUsuario, setJugadaUsuario] = useState('');
  const [jugadaMaquina, setJugadaMaquina] = useState('');
  const [resultado, setResultado] = useState('');
  const [contadorRound, setContadorRound] = useState(1);
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosMaquina, setPuntosMaquina] = useState(0);
  const [display, setDisplay] = useState('');

  const [imagenJugadaUsuario, setImagenJugadaUsuario] = useState('VACIA');
  const [imagenJugadaMaquina, setImagenJugadaMaquina] = useState('VACIA');

  const [mostrarBotonInterfaz, setMostrarBotonInterfaz] = useState(true);
  const [mostrarBotonAtaque, setMostrarBotonAtaque] = useState(true);

  // Declaración de objetos de audio para los efectos de sonido
  const sonidoVictoriaFinal = new Audio(audioVictoriaFinal);
  const sonidoDerrotaFinal = new Audio(audioDerrotaFinal);
  const sonidoVictoriaParcial = new Audio(audioVictoriaParcial);
  const sonidoDerrotaParcial = new Audio(audioDerrotaParcial);

  // Efecto que se ejecuta cuando cambian los puntos del usuario o de la máquina
  useEffect(() => {

    // Verifica si el juego debe terminar (alcanzando 3 puntos por parte de un jugador)
    if (puntosUsuario === 3 || puntosMaquina === 3) {
      setMostrarBotonAtaque(false);

      setTimeout(() => {
        if (puntosUsuario === 3) {
          ganadorPartida('usuario');
          sonidoVictoriaFinal.play();
        } else {
          ganadorPartida('maquina');
          sonidoDerrotaFinal.play();
        }

        // Reinicia los valores del juego
        setPuntosUsuario(0);
        setPuntosMaquina(0);
        setContadorRound(1);
        setJugadaUsuario('');
        setJugadaMaquina('');
        setImagenJugadaUsuario('VACIA');
        setImagenJugadaMaquina('VACIA');
        setResultado('');
        setDisplay('');
        setMostrarBotonAtaque(true);
      }, 2000);
    }
  }, [puntosUsuario, puntosMaquina, ganadorPartida]);

  // Función para realizar una jugada
  const jugar = (eleccionUsuario) => {
    setJugadaUsuario(eleccionUsuario);
    setImagenJugadaUsuario(eleccionUsuario);
    const jugadaMaquinaAleatoria = obtenerJugadaMaquinaAleatoria();
    setJugadaMaquina(jugadaMaquinaAleatoria);
    setImagenJugadaMaquina(jugadaMaquinaAleatoria);
    determinarResultado(eleccionUsuario, jugadaMaquinaAleatoria);
  };

  // Función para obtener una jugada aleatoria de la máquina
  const obtenerJugadaMaquinaAleatoria = () => {
    const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];
    const jugadaRandom = opciones[Math.floor(Math.random() * opciones.length)];
    return jugadaRandom;
  };

  // Función para determinar el resultado de una jugada
  const determinarResultado = (eleccionUsuario, eleccionMaquina) => {

    let nuevoResultado = '';

    if (eleccionUsuario === eleccionMaquina) {
      nuevoResultado = 'EMPATE';
    } else if (
      (eleccionUsuario === 'PIEDRA' && eleccionMaquina === 'TIJERA') ||
      (eleccionUsuario === 'PAPEL' && eleccionMaquina === 'PIEDRA') ||
      (eleccionUsuario === 'TIJERA' && eleccionMaquina === 'PAPEL')
    ) {
      sonidoVictoriaParcial.play();
      setPuntosUsuario((prevPuntosUsuario) => prevPuntosUsuario + 1);
      nuevoResultado = `PUNTO DE ${nombreUsuario}`;
      setContadorRound(contadorRound + 1);
    } else {
      sonidoDerrotaParcial.play();
      setPuntosMaquina((prevPuntosMaquina) => prevPuntosMaquina + 1);
      nuevoResultado = 'PUNTO DE MAQUINA';
      setContadorRound(contadorRound + 1);
    }

    setResultado(nuevoResultado);
    setDisplay(nuevoResultado);

  };

  // Función para reiniciar el juego
  const reiniciarJuego = () => {
    setJugadaUsuario('');
    setJugadaMaquina('');
    setImagenJugadaUsuario('VACIA');
    setImagenJugadaMaquina('VACIA');
    setResultado('');
    setDisplay('');
    setContadorRound(1);
    setPuntosUsuario(0);
    setPuntosMaquina(0);
  };

  // Devuelve la estructura de la interfaz de usuario
  return (
    <div className='App'>

      <div className='header'>
        <Header />
      </div>

      <div className='areaJuego'>

        <div className='areaUsuario'>
          <AreaUsuario
            nombreUsuario={nombreUsuario}
            puntosUsuario={puntosUsuario}
            jugadaTextoUsuario={jugadaUsuario}
            jugadaImagenUsuario={imagenJugadaUsuario}
          />
        </div>

        <div className='areaDatos'>
          <AreaDatos
            mensajeDisplay={display}
            mostrarRound={contadorRound} 
          />
        </div>

        <div className='areaMaquina'>
          <AreaMaquina
            mostrarPuntosMaquina={puntosMaquina}
            jugadaTextoMaquina={jugadaMaquina}
            jugadaImagenMaquina={imagenJugadaMaquina}
          />
        </div>

      </div>

      <div className='area-ataque'>
        <AreaAtaque
          jugar={jugar}
          reiniciarJuego={reiniciarJuego}
          mostrarBotonInterfaz={mostrarBotonInterfaz}
          setMostrarBotonInterfaz={setMostrarBotonInterfaz}
          mostrarBotonAtaque={mostrarBotonAtaque}
          setMostrarBotonAtaque={setMostrarBotonAtaque}
        />
      </div>

    </div>
  );
}

// Exporta el componente para su uso en otros archivos
export default Juego;