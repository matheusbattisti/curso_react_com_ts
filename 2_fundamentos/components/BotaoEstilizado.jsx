function BotaoEstilizado() {
  const estiloDoBotao = {
    backgroundColor: "#4CAF50", // Cor de fundo verde
    color: "white", // Texto branco
    padding: "15px 32px", // Padding interno
    textAlign: "center", // Texto centralizado
    fontSize: "16px", // Tamanho da fonte
    margin: "4px 2px", // Margem externa
    cursor: "pointer", // Cursor de ponteiro
    border: "none", // Sem borda
  };

  return <button style={estiloDoBotao}>Clique em mim</button>;
}

export default BotaoEstilizado;
