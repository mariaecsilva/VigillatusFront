import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
`; 

export const DivFlex = styled.div`
   padding-left:100px;
`;

export const Linha = styled.div`
    border: none;
    background-color: #E5E5E5;
    border-bottom: 3px solid #B5B5B5; 
    width: 95%; 
`;


export const UlRota = styled.ul`
   padding: 0;
    display: flex;
    flex-direction: row;
    margin-bottom:0;
`;

export const LiRota = styled.li`
    color: #B5B5B5;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: bold; 
    display: flex; 
    justify-content:center;
    align-items: center; 
`;

export const LinkRota = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Arrow = styled.span`
    margin-right: 10px;
    margin-left: 5px;
`;
 