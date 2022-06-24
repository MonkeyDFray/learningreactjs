import React from 'react';
import logo from './logo.svg';
import './App.css';
import Estado from './components/estado.jsx'
import Component from './components/h2_componente.jsx'
import Propiedades from './components/propiedades.jsx'
import RenderizadoCondicional from './components/condicionales.jsx'
import RenderizadoElementos from './components/renderizado_elementos.jsx'
import {EventoES6, EventoES7, MasSobreEventos} from './components/eventos.jsx'
import {Padre} from './components/comunicacion_componentes.jsx'
import {CicloDeVida} from './components/ciclo_de_vida.jsx'
import {EnableScroll} from './components/scrollHooks_useEffect'
// import {AjaxApis} from './components/ajax_apis.jsx'
import {ContadorHooks} from './components/hook_useState'
import {RelojHooks} from './components/relojConHooks'
import {PokemonsHooks} from './components/AjaxApisHooks'
import {HookPersonalizado} from './components/HooksPersonalizados'
import {PruebasPropias} from './components/PruebaPropia'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component msg='Hola soy un titulo 2'/>
        <hr />
        <Propiedades 
        cadena='cadena de texto'
        booleano={false}
        arreglo = {[1,2,3,4,5]}
        objeto = {{
          nombre: 'Juan',
          correo: 'jjuan1458@gmail.com'
        }}
        funcion = {number => number * number}
        elemento = {<i> Elemento JSX </i>}
        componenteReact = {<Component msg='Hola soy muy chido' />}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventoES6 />
        <hr />
        <EventoES7 />
        <hr />
        <MasSobreEventos /> 
        <hr />
        <Padre />
        <hr />
        <CicloDeVida />
        {/* <hr /> */}
        {/* <AjaxApis /> */}
        <hr />
        <ContadorHooks />
        <hr />
        <EnableScroll />
        <hr />
        <RelojHooks />
        <hr />
        <PokemonsHooks />
        <hr />
        <HookPersonalizado />
        <hr />
        <PruebasPropias />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
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
