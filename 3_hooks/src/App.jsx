import "./App.css";
import ComponenteFilho from "./components/ComponenteFilho";
import ExemploLimpeza from "./components/ExemploLimpeza";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import { MeuContextoProvider } from "./contexts/MeuContexto";
import ValorDoContexto from "./components/ValorDoContexto";
import Contador from "./components/Contador";
import DisplayWindowSize from "./components/DisplayWindowSize";
import Container from "./components/Container";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import CalculoPesado from "./components/CalculoPesado";
import Exercises from "./components/Exercises";
import ContadorCallback from "./components/ContadorCallback";

function App() {
  return (
    <>
      {/* 8.1 useEffect */}
      <ExemploUseEffect />
      <Timer />
      <ExemploLimpeza />
      {/* 8.2 useContext */}
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* 8.3 useReducer */}
      <Contador />
      {/* 8.4 Custom hooks */}
      <DisplayWindowSize />
      {/* 8.5 Slots e children props */}
      <Container>
        <h1>Título</h1>
        <p>Este é um parágrafo contido no container.</p>
      </Container>
      {/* 8.6 Sincronizando Estado com Props */}
      <PerfilDeUsuario usuarioId={1} />
      {/* 8.7 Performance e Hooks: useMemo e useCallback */}
      <CalculoPesado numero={5} />
      <ContadorCallback />
      {/* 8.8 Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
