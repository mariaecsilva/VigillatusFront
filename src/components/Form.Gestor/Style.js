import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
`;

export const StyledForm = styled.form`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column; 
    align-items:center;
`;

export const StyledContainer = styled.form`
    display: flex;
    flex-direction: column; 
    gap: 40px;
    align-items:center;
`;


export const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #001f3f;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin:10px;

    &:hover {
        background-color: #00122e;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    margin-bottom: 10px;
    font-weight: bold;
`;