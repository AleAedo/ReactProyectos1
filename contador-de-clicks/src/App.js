import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamplogo.png'

function App() {
  return (
    <div className="App">
     <div className='frerecodecamp-logo-contenedor'>
      <img 
      className='freecodecamp-logo'
      scr={freeCodeCampLogo}
      alt='Logo de freeCodeCamp'/>
     </div>
    </div>
  );
}

export default App;
