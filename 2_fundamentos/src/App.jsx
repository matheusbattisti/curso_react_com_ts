import Welcome from "../components/Welcome";
import BomDia from "../components/BomDia";
import Pai from "../components/Pai";
import Descricao from "../components/Descricao";
import "./App.css";
import Cachorro from "../components/Cachorro";
import Counter from "../components/Counter";
import UserInfoForm from "../components/UserInfoForm";
import Button from "../components/Button";
import PaiFuncao from "../components/PaiFuncao";
import Form from "../components/Form";
import RenderCondicional from "../components/RenderCondicional";
import LoginButton from "../components/Ternario";
import Warning from "../components/Warning";
import NumberList from "../components/NumberList";
import BotaoEstilizado from "../components/BotaoEstilizado";
import BotaoAzul from "../components/BotaoAzul";
import Exercises from "../components/Exercises";

function App() {
  return (
    <>
      {/* 6.1 - Criação de componente */}
      <Welcome />
      {/* 6.2 - Expressões no JSX */}
      <BomDia />
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      {/* 6.4 Props */}
      <Descricao nome="Matheus" idade={30} />
      {/* 6.5 Desestruturação de props */}
      <Cachorro nome="Bob" raca="Pastor Alemão" />
      {/* 6.6 useState */}
      <Counter />
      {/* 6.7 Múltilplos estados */}
      <UserInfoForm />
      {/* 6.8 Eventos */}
      <Button />
      {/* 6.9 Passando Funções de Manipulação de Eventos como Props */}
      <PaiFuncao />
      {/* 6.10 Eventos de form */}
      <Form />
      {/* 6.11 Renderização condicional */}
      <RenderCondicional user="João" />
      {/* 6.12 Expressão ternária */}
      <LoginButton loggedIn={true} />
      {/* 6.13 Render nulo */}
      <Warning showWarning={true} />
      {/* 6.14 Listas e Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      {/* 6.15 Estilos por atributo */}
      <BotaoEstilizado />
      {/* 6.16 Estilos globais */}
      <BotaoAzul />
      {/* 6.17 Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
