export interface Produto {
  id: number;
  nome: string;
  preco: number;
  // mantém compatibilidade com os templates que usam `imagem`
  imagem: string;
  categoria: string;
  descricao?: string;
}


