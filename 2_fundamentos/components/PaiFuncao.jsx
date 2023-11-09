import FilhoFuncao from "./FilhoFuncao";

function PaiFuncao() {
  const handleChildClick = () => {
    console.log("Clicou no botão do filho!");
  };

  return (
    <div>
      <FilhoFuncao onChildClick={handleChildClick} />
    </div>
  );
}

export default PaiFuncao;
