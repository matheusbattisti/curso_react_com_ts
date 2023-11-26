import React, { createContext, useState, ReactNode } from "react";

// Definindo o tipo para o contexto do tema
type Tema = "claro" | "escuro";
type TemaContexto = {
  tema: Tema;
  alternarTema: () => void;
};

// Criando o contexto com um valor padrão
export const TemaContext = createContext<TemaContexto | undefined>(undefined);

type TemaProviderProps = {
  children: ReactNode;
};

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
