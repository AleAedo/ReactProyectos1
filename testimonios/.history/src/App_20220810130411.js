import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que se dice de Suju</h1>
      <Testimonio
      nombre='Siwon Choi'
      pais='Corea'
      cargo='Visual de Grupo'
      testimonio='Choi siwon cantante, modelo y mucho más '/>
      </div>
      
    </div>
  );
}

export default App;
