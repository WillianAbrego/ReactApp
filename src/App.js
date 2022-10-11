import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderiszadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponente from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
//import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />

            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Componente msg="Hola soy un componente" />
            <hr></hr>
            <Propiedades
              cadena="Esto una cadena de texto"
              numero={20}
              boolean={true}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "will", correo: "wil@mail" }}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={
                <Componente msg="soy un componente pasado como props" />
              }
            />
            <hr />
            <Estado></Estado>
            <hr></hr>
            <RenderizadoCondicional />
            <hr></hr>
            <RenderizadoElementos />
            <hr></hr>
            <EventosES6 />
            <hr></hr>
            <EventosES7 />
            <hr></hr>
            <MasSobreEventos />
            <hr></hr>
            <ComunicacionComponente />
            <hr></hr>
            <CicloVida />
            <hr></hr>
            {/* <AjaxApis /> */}
            <ContadorHooks titulo="Seguidores" />
            <hr></hr>
            <ScrollHooks></ScrollHooks>
            <hr></hr>
            <RelojHooks />
            <hr></hr>
            <AjaxHooks />
          </section>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
