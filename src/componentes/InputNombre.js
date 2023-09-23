import React from "react";
import '../hojas-de-estilo/InputNombre.css';

function InputNombre({ onKeyPress }) {
  return (
    <div className='nombre'>
      <input className='input-nombre' type='text' onKeyPress={onKeyPress} />
    </div>
  );
}

export default InputNombre;