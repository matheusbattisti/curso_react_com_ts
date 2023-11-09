import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Preencha o campo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
