import logo from './logo.svg';
import './App.css';
import helpFunctions from './helpFunctions'

function App() {
  let nombre = 'Javier',
      edad = 17,
      familia = ['Yara', 'Olga', 'Juan']
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label for="nombre">Nombre</label>
        <input value={edad >= 18 ? nombre : 'No es mayor de edad'} type="text" id='nombre'/>
        <ul>
          {helpFunctions.createList(familia)}
        </ul>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
