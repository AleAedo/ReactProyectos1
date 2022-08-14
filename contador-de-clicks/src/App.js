import './App.css';
import freeCodeCampLogoI from './imagenes/freecodecamplogo.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import {useState} from 'react';

function App() {
  const [numClics, setNumClics]= useState(0);

  const manejarClicks = () => {
      setNumClics(numClics+1);


  };
  const reiniciarContador = () => {
    setNumClics(0);

  };
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
        <img  
          className='freecodecamo-logo'   
          src= {freeCodeCampLogoI}
          alt='logo'
       />
     </div>
     <div className='contenedor-principal'>
      <Contador
      numClics={numClics} />
        
      
      <Boton
      texto= 'Clic'
      esBotonDeClick={true} 
      manejarClic={manejarClicks}   />
      <Boton
      texto= 'Reiniciar'
      esBotonDeClick={false} 
      manejarClic={reiniciarContador}   />

     

     </div>
    </div>
  );
}

export default App;
