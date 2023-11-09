function RenderCondicional({ user }) {
  return <div>{user && <h1>Bem vindo de volta, {user}!</h1>}</div>;
}

export default RenderCondicional;
