import { createContext, useState, ReactNode } from "react";

// Definindo o tipo para o estado do tema
type Tema = "claro" | "escuro";

// Definindo a interface para o contexto do tema
interface TemaContexto {
  tema: Tema;
  alternarTema: () => void;
}

// Criando o contexto com um valor padrão
export const TemaContext = createContext<TemaContexto | null>(null);

// Definindo as props do provedor de tema
interface TemaProviderProps {
  children?: ReactNode;
}

// Componente provedor que envolve o aplicativo
export const TemaProvider = ({ children }: TemaProviderProps) => {
  const [tema, setTema] = useState<Tema>("claro");

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};
