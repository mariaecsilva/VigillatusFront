import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
`; 

export const DivFlex = styled.div`
    padding-left: 7%;
`;

export const Linha = styled.div`
    border: none;
    background-color: #E5E5E5;
    border-bottom: 3px solid #B5B5B5; 
    width: 95%; 
`;

export const UlSub = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    margin-bottom:0;
`;

export const LiSub = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold; 
    display: flex; 
    justify-content: center;
    align-items: center; 
    padding: 4px;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;

    &.active {
        background-color: #B5B5B5;
        color: #FFFFFF;
    }
`;


