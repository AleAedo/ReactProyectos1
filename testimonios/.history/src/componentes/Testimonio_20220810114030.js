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
        <p className='nombre-testimonio'> Choi Siwon</p>
        <p className='cargo-testimonio'> Modelo de Grupo</p>
        <p className='texto-testimonio'> Cantante, actor y modelo coreano. Es considerado un ícono en Corea y una estrella mundial del Hallyu en el modelaje   </p>
      </div>
      </div>
    );  
}
export default Testimonio;