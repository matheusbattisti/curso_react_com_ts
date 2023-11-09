function LoginButton({ loggedIn }) {
  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  );
}

export default LoginButton;
