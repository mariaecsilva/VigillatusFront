import styled from 'styled-components';

// GlobalStyle para importar a fonte Roboto
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
`;

export const StyledNavbar = styled.div`
    background-color: #333333;
    width: 100%; /* Usa 100% da largura da tela disponível, sem afetar o layout com barras de rolagem */
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; /* Fixa a navbar no topo */
    top: 0; /* Posiciona a navbar no topo */
    left: 0; /* Garante que a navbar ocupe toda a largura */
    z-index: 20; /* Garante que a navbar fique acima da sidebar */
`;


// Estilo do logo
export const StyledLogo = styled.img`
    width: 70px;
    height: 70px;
    cursor: pointer;
    padding: 20px;
`;

// Botão de notificação
export const StyledButtonNotificacao = styled.button`
    width:30px;
    height:30px;
    background: transparent;
    border: none; 
    cursor: pointer; 
    padding: 0; 
    align-items: center; 
    justify-content: center; 
    margin-right: 20px;
`;

// Imagem de notificação dentro do botão
export const StyledImagemNotificacao = styled.img`
    width: 100%;
    height: 100%;
`;

// Div que agrupa notificações e perfil
export const StyledDivPerfil = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

// Modal de notificações
export const NotificacoesModal = styled.div`
    position: absolute;
    top: 70px;
    right: 50px;
    width: 280px;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    z-index: 10;
    font-family: 'Roboto', sans-serif;
`;

// Título do modal
export const ModalTitulo = styled.h4`
    margin: 0;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #999999;
    border-bottom: 1px solid #e0e0e0;
`;

// Lista de notificações
export const ListaNotificacoes = styled.ul`
    padding: 2px;
    margin: 10px 30px 20px 25px;
    list-style-type: none; 
`;

// Item individual de notificação com bolinha vermelha personalizada
export const NotificacaoItem = styled.li`
    font-size: 16px;
    margin-top: 10px;
    border-radius: 8px;
    color: #333;
    position: relative; // Necessário para o posicionamento do pseudoelemento

    &::before {
        content: '';
        position: absolute;
        left: -20px; // Ajusta a posição da bolinha
        top: 50%;
        transform: translateY(-50%);
        width: 10px; // Largura da bolinha
        height: 10px; // Altura da bolinha
        background-color: red; // Cor da bolinha
        border-radius: 50%; // Faz a bolinha ser redonda
    }
`;

// Estilo do perfil
export const StyledPerfil = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold;
`;

// Imagem de perfil
export const StyledImagemPerfil = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-right: 10px;
`;

