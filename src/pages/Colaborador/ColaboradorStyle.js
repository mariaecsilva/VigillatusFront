import styled from 'styled-components';

// Layout da página
export const Container = styled.div`
  background-color: #E5E5E5;
    width: 100vw;
    height: 1080px;
    padding: 0px 0 0 90px;
    position: absolute;
    z-index: 1; 
`

// Títulos e Seções
export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 50px;
font-family: 'Roboto', sans-serif;
  `;

// Modificações no StyledContainer
export const StyledContainer = styled.div`
  flex: 1;
  margin-left: 60px;
  padding: 20px;
  max-height: 720px; /* Define uma altura máxima */
  border-radius: 0 0 20px 20px;
`;


// Estilo da tabela
export const TableContainer = styled.div`
  width: 96%;
  max-height: 700px; /* Define uma altura máxima para a tabela */
  overflow-y: auto; /* Adiciona rolagem vertical se o conteúdo exceder a altura */
  border-radius: 0 0 20px 20px;
  `;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed; /* Tabela com layout fixo para as colunas */
  }

  tbody {
    display: table-row-group; /* Remove rolagem do tbody */
  }
`;

// Cabeçalho da tabela
export const HeaderRow = styled.tr`
   background-color: #333;
  text-align: left;
  position: sticky;
  top: 0; /* Fixa no topo */
  z-index: 2; /* Garante que o cabeçalho fique sobre as outras linhas */
  width: 100%;
  color: #FFFFFF;
  `;

export const HeaderCell = styled.th`
   font-size: 22px;
  vertical-align: middle;
  text-align: left;
  background-color: #333;
  z-index: 2;
  padding: 15px;
  width: 20%;

  &:first-child {
    border-top-left-radius: 25px; /* Define o raio da borda esquerda */
  }

  &:last-child {
    border-top-right-radius: 25px; /* Define o raio da borda direita */
  `;

  export const StyledTableCell = styled.td`
  padding: 20px;
  vertical-align: middle;
  font-size: 18px;
  font-family: 'Arial';
  font-weight: 600;
  width: 20%;
  position: relative;
`;


// Estilo das linhas e células da tabela
export const StyledTableRow = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc; /* Linha horizontal abaixo de cada linha */
  
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;


// Corpo da tabela
export const TableBody = styled.tbody`
  background-color: #ffffff;
  height: 500px;
`;


export const EmailTableCell = styled(StyledTableCell)`
  color: #B5B5B5; 
`;

// Estilo da imagem de perfil
export const ProfileImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 15px;
`;

// Estilo do botão "Ver Perfil"
export const ViewProfileButton = styled.button`
  background-color: #4B7296;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  font-family: 'Arial';
  font-weight: 600;
  width: 115px;
  margin-left: 65px;

  &:hover {
    background-color: #365f7f;
  }
`;

export const AdicionarButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  background-color: #4B7296;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  height: 25px;
  width: 150px;
  font-family: 'Arial';
  font-weight: 600;
  margin-left: 81%;

  &:hover {
    background-color: #365f7f;
  }
`;


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 75%;
  padding: 13px;
  font-size: 24px;
  margin-bottom: 16px;
  background-color: #fff;
  width: 280px; /* Ajuste conforme necessário */
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 10px;
  width: 100%;
  height: 100%;
  font-size: 19px;
  outline: none; /* Remove contorno padrão do input */

  &::placeholder {
    color: #aaa; /* Cor do texto do placeholder */
  }
`;
