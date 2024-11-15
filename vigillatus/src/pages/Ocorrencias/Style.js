import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
`; 

export const Container = styled.div`
    background-color: #E5E5E5;
    margin-top: 100px;
    margin-left: 90px; 
    width: calc(100% - 90px); 
    height: calc(150% - 100px); 
    position: absolute;
    z-index: 1;
`;

export const DivCard= styled.div`
    margin-top:3%;
    height:75%;
`

export const Titulo = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: bold; 
    margin-left: 7%;
`

export const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; 
  justify-content: center;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:25%;
    flex-direction: column;  
`

export const Setor = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: bold; 
    color:#FFFFFF;
    margin-bottom:3%;
`

export const DivConteudo = styled.div`
    height:65%;
    display: flex;
    justify-content: center;
    align-items:center;
    padding:3%;
    color:#FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    
      h2 {
        font-size: 25px;
        margin: 0;
    }

    p {
        font-size: 25px;
        margin: 0;
    }
`

export const DivTexto = styled.div`
    display: flex;
    flex-direction: column;  
    gap: 20px;  
    text-align:center;
    align-items:center;
    justify-content:center;
    width:50%;
`

export const ImagemCard = styled.img`
    width:35%;
    height:auto;
    width:40%;
`

export const ButtonVerMais = styled.button`
    width:60%;
    height:20%;
    background-color:#A29F9F;
    color: white;
    border: none;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    cursor: pointer; 
    text-align: center; 
    transition: background-color 0.3s ease; 
    

    &:hover {
        background-color: #7F7F7F; 
    }
`

export const Linha = styled.div`
    border: none;
    background-color: #E5E5E5;
    border-bottom: 3px solid #B5B5B5; 
    width: 95%; 
`;


export const DivOcorrencia = styled.div`
    width: 1440px;
    height: 100vh;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction: column;

`

export const BarraTitulo = styled.div`
    width: 1290px;
    height: 55px;
    background-color: #333333;
    border-radius: 20px 20px 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold; 
    color: #FFFFFF;
    display:flex;
    align-items:center;
    justify-content:space-between;

    p{
        margin-left: 10px;
    }

    button{
        margin-right:10px
    }
`

export const Section = styled.div`
    width: 1290px;
    height: 720px;
    background-color:#FFFFFF;
    border-radius: 0 0 20px 20px;
    display:flex;
    align-items:center;
`

export const DivImagem = styled.div`
    width: 40%;
    height: 650px;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction: column; 
`

export const DivDados = styled.div`
    width: 60%;
    height: 650px;

`
export const ImageOcorrencia = styled.img`
    width: 420px;
    height: 300px;
    margin:10px;
`
export const ButtonApagar = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: bold;
    background-color: #FF0000;
    color: white; 
    border: none;
    padding: 10px 20px; 
    border-radius: 20px; 
    cursor: pointer; 

      &:hover {
    background-color: #cc0000; 
  }
`

export const ButtonSalvar = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: bold; 
    background-color:#4B7296;
    width:200px;
    color: white; 
    border: none;
    padding: 10px 20px; 
    border-radius: 20px; 
    cursor: pointer; 

      &:hover {
    background-color: #20496F ;
  }
`
export const ButtonSair= styled.div`
    margin-right: 20px
`

export const DivInformacoes = styled.div`
    display: flex;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
`

export const DivBotoes = styled.div`
    display: flex;
    align-items:flex-end;
    justify-content: space-between;
    height:200px;

`
export const DivInputs = styled.div`
    display: flex;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin: 20px 0px 10px 0px;

    input{
        margin-bottom:10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: bold; 
        width: 388px;
        height: 30px;
        padding:8px 0 8px 0;
    }
    
`

