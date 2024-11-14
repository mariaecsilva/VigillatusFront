import styled from 'styled-components';

// Container principal do perfil
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1080px;
  background-color: #f2f2f2;
  width: 1530px;
`;

// Cartão de perfil
export const ProfileCard = styled.div`
  width: 950px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 30px;
  height: 660px;
  position: relative; /* Para posicionar a imagem de perfil sobre o cartão */
`;

// Imagem de perfil
export const ProfileImage = styled.img`
  width: 290px;
  height: 290px;
  border-radius: 50%;
  margin-bottom: 5px;
  margin-top: -105px; /* Ajusta para centralizar a imagem em cima do cartão */
  position: absolute; /* Faz a imagem sobrepor o cartão */
  top: 0; /* Alinha a imagem ao topo do cartão */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta a centralização */
`;

// Nome do perfil
export const ProfileName = styled.h2`
  font-size: 35px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  margin-top: 190px; /* Ajuste aqui para dar espaço abaixo da imagem */
  margin-bottom: 100px;
`;

// Detalhes do perfil
export const ProfileDetails = styled.div`
  margin-top: 20px; /* Reduzido para não cobrir o nome */
  margin-bottom: 40px;
`;


// Linha individual de detalhe
export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

// Rótulo (Label) de cada detalhe
export const DetailLabel = styled.span`
  font-weight: bold;
  font-size: 22px;
  color: #666;
  width: 200px;
  text-align: left;
  margin-right: 3px;
  margin-left: 30px;
`;

// Valor de cada detalhe
export const DetailValue = styled.span`
  color: #333;
  font-size: 22px;
  flex: 1;
  text-align: left;
  font-weight: bold;
`;

// Botão de editar
export const EditButton = styled.button`
  background-color: #5b7b9e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 700px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a6881;
  }
`;
