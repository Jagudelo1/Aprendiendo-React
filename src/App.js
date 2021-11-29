import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar Componentes
import MiComponente from './Components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = 
  (
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Juan David";
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hola Bienvenido al curso de React de Victor Robles WEB !!
        </p>
        {HolaMundo(nombre, 12)}

        <section className="componentes">

          <MiComponente />

        </section>
      </header>

      
    </div>
  );
}

export default App;