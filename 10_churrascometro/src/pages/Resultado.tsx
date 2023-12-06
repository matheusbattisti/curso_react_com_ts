import ResultadoChurrasco from "../components/ResultadoChurrasco";

import bgImage from "../assets/bg-2.jpg";

const Resultado = () => {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <h1>Resultado do Churrasco</h1>
      <ResultadoChurrasco />
    </div>
  );
};

export default Resultado;
