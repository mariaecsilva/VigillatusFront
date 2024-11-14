import styled from 'styled-components';

export const DivCard = styled.div`
    background-color: #4B7296;
    width: 40%;
    height: auto;
    border-radius: 30px;
    margin-left: 33px;
    margin-bottom: 33px;
    position: relative; 
    display: flex;
    justify-content: center;
    border: 4px solid transparent; 

     &.active {
        border-color: red; 
    }
`;

export const Linha = styled.hr`
    border: none;
    border-top: 2px solid #B5B5B5; 
    position: absolute;
    top: 87px; 
    width: 90%; 
    z-index: 10; 
`;