import "./App.css";
import BarraFerramentas from "./components/BotaoFerramentas";
import Contador from "./components/Contador";
import ContadorIntervalo from "./components/ContadorIntervalo";
import Counter from "./components/Counter";
import Exercicios from "./components/Exercicios";
import ExibirPostagens from "./components/ExibirPostagem";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";
import { TemaProvider } from "./context/TemaContext";

function App() {
  return (
    <>
      {/* 1 - Componentes funcionais com TS */}
      <Greeting name="Matheus" />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom hook com TS */}
      <ContadorIntervalo />
      {/* 5 - Exercícios */}
      <Exercicios />
      {/* 6 - useReducer e TypeScript */}
      <Contador />
      {/* 7 - Context API com TypeScript  */}
      <TemaProvider>
        <div>
          <BarraFerramentas />
          {/* Outros componentes que consomem o contexto TemaContext também viriam aqui */}
        </div>
      </TemaProvider>
      {/* 8 - Axios com TS */}
      <ExibirPostagens />
    </>
  );
}

export default App;
