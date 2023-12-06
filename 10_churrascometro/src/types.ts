// Definição dos tipos de alimentos
export type Alimento = "carne" | "linguica" | "frango" | "paoAlho";

// Quantidades padrão em gramas por pessoa para cada tipo de alimento
export const quantidadesPorPessoa: Record<Alimento, number> = {
  carne: 400,
  linguica: 200,
  frango: 200,
  paoAlho: 100,
};

export const nomesAlimentos: Record<string, string> = {
  carne: "Carne",
  linguica: "Linguiça",
  frango: "Frango",
  paoAlho: "Pão de Alho",
};
