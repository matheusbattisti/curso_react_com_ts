type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <h1>Olá, {name}!</h1>;
};

export default Greeting;
