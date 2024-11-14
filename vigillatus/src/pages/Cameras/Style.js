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
`

export const DivCard= styled.div`
    margin-top:3%;
    height:72%;
`

export const Titulo = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 60px;
    font-weight: bold; 
    margin-left: 100px;
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

export const StyledVoltar = styled.img`
    width: 50px;
    cursor: pointer; 
`
export const Setor = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: bold; 
    color:#FFFFFF;

`

export const ImageCard = styled.img`
    width: 190px
    height: 190px;
`

export const DivImage = styled.div`
    height: 100px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    
`

export const DivConteudo = styled.div`

`