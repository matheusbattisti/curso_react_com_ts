import CalculadoraChurrasco from "../components/CalculadoraChurrasco";

import bgImage from "../assets/bg-1.jpg";

const Calculadora = () => {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <h1>Calculadora de Churrasco</h1>
      <CalculadoraChurrasco />
    </div>
  );
};

export default Calculadora;
