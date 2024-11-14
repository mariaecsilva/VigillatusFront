import styled from 'styled-components';

export const StyledSidebar = styled.div`
    background-color: #FFFFFF;
    width: 90px;
    height: calc(100vh - 100px); 
    transition: width 0.0001s ease-in-out;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    position: fixed; 
    top: 100px; 
    left: 0; 
    z-index: 10; 

    &:hover {
        width: 273px;
        margin:0;
    }

    &:hover .sidebar-text {
        visibility: visible;
        opacity: 1;
    }
`;


export const StyledButtonSidebar = styled.button`
    background-color: #FFFFFF;
    display: flex;
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    align-items: center;
    margin-bottom: 50px;
    position: relative; 

    &:hover {
        height: 100%; 
        width: 4px; 
        background-color: #333333;
    }

    &:hover::before {
        content: "";
        position: absolute;
        left: 0; 
        top: 0;
        height: 100%; 
        width: 4px; 
        background-color: #333333;
    }

    &.active::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: #333333;
    }
`;

export const ButtonContainer = styled.div`
    padding-top: 50px;
    flex-direction: column;

    &:hover {
        align-items: start;
        flex-direction: row;
    }
`;

export const DivLogout = styled.div`
    margin-top:30%;
`;

export const StyledSpanSidebar = styled.span`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.01s, opacity 0.01s ease-in-out;
    margin-left: 20px; 
    text-align: center; 
    font-size: 20px;
    color: #000000;
`;

export const StyledIcon = styled.img`
    width: 35px;
    height: 35px;
    padding-left: 15px;

    &:hover {
        padding-left: 20px;
    }
`;
