import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio() {
    return  (
      <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require('../imagenes/testimonio-siwon.jpg') }
      alt='Foto de siwon'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> Siwon en Revista</p>
        <p className='cargo-testimonio'> Modelo de Grupo</p>
        <p className='texto-testimonio'> le va bien en la revista xxxx quién no la tiene?   </p>
      </div>
      </div>
    );  
}
export default Testimonio;