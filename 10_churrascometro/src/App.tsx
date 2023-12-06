import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaCalculadora from "./pages/Calculadora";
import PaginaResultado from "./pages/Resultado";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaCalculadora />} />
        <Route path="/resultado" element={<PaginaResultado />} />
      </Routes>
    </Router>
  );
};

export default App;
