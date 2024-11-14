import styled from "styled-components";

// Layout da página
export const Container = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 1080px;
    padding: 0px 0 0 90px;
    position: absolute;
    z-index: 1; 
`;

// Novo componente estilizado para o título
export const PageTitle = styled.h1`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  margin-left: 140px; /* Alinha com o conteúdo abaixo */
  margin-top: 40px; /* Espaçamento superior */
  margin-bottom: 30px; /* Espaçamento inferior para o conteúdo */
  color: #333; /* Ajuste de cor, caso necessário */
`;

export const Page  = styled.div`
  margin-left: -360px;
  display: flex;
  flex-direction: row; /* Certifique-se de que o layout seja em linha */
  gap: 1; /* Remove espaço entre os elementos filhos */
  margin-top: 120px;
  width: 1380px; 
`;

// Estilização da área de perfil e ocorrências juntas
export const ProfileDetails = styled.div`
  display: flex; /* Mantenha o display flex */
  gap: 0px;
  flex-grow: 1; /* Permite que o contêiner cresça */
  align-items: stretch; 
`;

// Div trabalhador com altura mínima igual à do conteúdo
export const Trabalhador = styled.div`
  background-color: #333333;
  padding: 50px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 600px; /* Mesma altura mínima que o conteúdo */
  color: white;
  min-width: 220px;
`;



// Botão de voltar acima da imagem do perfil, com fundo visível
export const BackButton = styled.button`
  background: none; /* Remover o fundo */
  border: none;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  color: #fff; /* Cor do ícone */

  &::before {
    content: "<";
    color: 808080; /* Cor do texto do botão */
  }

  /* Adicionando um efeito de hover opcional */
  &:hover {
    color: #e0e0e0; /* Mudar a cor ao passar o mouse */
  }
`;


// Imagem de perfil
export const ProfileImage = styled.img`
  margin-top: 40px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

// Nome do perfil com linha abaixo
export const ProfileName = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  color: #fff;
`;

// Título do perfil com linha abaixo
export const ProfileTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  color: #fff;
`;

// Email do perfil com linha abaixo
export const ProfileEmail = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  color: #fff;
`;

// Conteúdo da página
export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #f3f3f3; /* Definindo o fundo da página */
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 600px; /* Definindo uma altura mínima */
  flex-grow: 1; /* Permite que o conteúdo preencha o espaço restante */
  min-width: 600px;
`;

// Cabeçalho da página
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px; /* Removido para eliminar espaço */
`;

// Título da página
export const Title = styled.h1`
  font-size: 35px;
`;

// Botão de filtro
export const FilterButton = styled.button`
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  font-size: 21px;
  margin-left: 10px;
  outline: none;

  &:hover {
    background-color: #d0d0d0; /* Altera a cor ao passar o mouse */
  }
`;

// Estilo do campo de entrada para filtro
export const FilterInput = styled.input`
  padding: 10px 15px; /* Espaçamento interno */
  font-size: 23px; /* Aumenta o tamanho da fonte */
  border: 1px solid #ccc;
  border-radius: 15px; /* Borda arredondada */
  width: 210px; /* Ajuste conforme necessário */
  outline: none; /* Remove contorno padrão do input */
  transition: box-shadow 0.2s ease;

  &::placeholder {
    color: #aaa; /* Cor do texto do placeholder */
    font-size: 18px; /* Aumenta o tamanho do placeholder */
  }

  &:focus {
    border-color: #fff; /* Altera a cor da borda ao focar */
    box-shadow: 0 0 5px rgba(75, 114, 150, 0.5); /* Sombra ao focar */
  }
`;

// Última linha da tabela sem borda inferior
export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border-spacing: 0; /* Define espaço entre células */
  border-collapse: separate; /* Mantém bordas separadas */
  flex: 1;
  border-radius: 0 0 20px 20px;
`;

// Células da tabela
export const Td = styled.td`
  padding: 12px 25px; /* Ajuste o padding conforme necessário */
  border-bottom: 1px solid #000 ;
  text-align: left;
  vertical-align: top;
  line-height: 2.5;
  font-size: 19px;
`;



// Cabeçalho da tabela
export const Th = styled.th`
  background-color: #333;
  color: #fff;
  padding: 18px 24px; /* Ajustado para um valor menor, o primeiro valor é o padding vertical */
  text-align: left;
  line-height: 1.2; /* Ajuste para compactar verticalmente */
  border-bottom: 2px solid #ddd; /* Borda inferior para contraste */
  font-size: 19px;
`;

// Paginação
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Botões de paginação
export const PageButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 10px 20px;
  margin: 0 8px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;