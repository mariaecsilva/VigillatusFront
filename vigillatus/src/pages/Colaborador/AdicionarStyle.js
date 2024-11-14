import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e5e5;
  width: 100vw;
  height: 1080px;
  padding: 0 0 0 90px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const ButtonSair = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

export const DivOcorrencia = styled.div`
  width: 1700px;
  height: 300px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 400px;
`;

export const Titulo = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 60px;
  font-weight: bold;
  margin-left:100px;
`;

export const BarraTitulo = styled.div`
  width: 1290px;
  height: 55px;
  background-color: #333333;
  border-radius: 20px 20px 0 0;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 10px;
  }
`;

export const Section = styled.div`
  width: 1290px;
  height: 720px;
  background-color: #ffffff;
  border-radius: 0 0 20px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 350px;
`;

export const DivImagem = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  flex-direction: column;
  gap: 40px;
  border-radius: 0 0 0 20px;
`;

export const DivDados = styled.div`
  width: 60%;
  height: 650px;
`;

export const ImageOcorrencia = styled.img`
  width: 420px;
  height: 300px;
  margin-bottom: 25px;
`;

export const ImageFoto = styled.img`
  width: 300px;
  height: 300px;
  margin-left: 15px;
  margin-top: 30px;
  display: block;
  border-radius: 50%;
`;

export const ButtonAddImage = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  background-color: #a29f9f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #8c8a8a;
  }
`;

export const DivImagemBotao = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px; 
  margin-top: 30px;
`;

export const ButtonSalvar = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  font-weight: bold;
  background-color: #4b7296;
  width: 200px;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: #20496f;
  }
`;

export const DivInformacoes = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const DivBotoes = styled.div`
  border: none; 
  bakcground-color: #fff;
  margin-top: 30px;
  margin-left: 330px;
`;

export const DivInputs = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  margin-left: 60px;
  margin-top: 90px;

  input {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: normal;
    width: 400px;
    height: 30px;
    padding: 8px 0;
    border-radius: 4px;
  }
`;

export const SelectInput = styled.select`
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 10px;

  &:focus {
    border-color: #4f86e0;P
    outline: none;
  }

  option {
    padding: 8px;
  }

`;

export const SelectColaborador = styled.select`
  width: 280px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
  margin: 10px 0;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
`;

export const DivInputsSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const DivTitulo = styled.div`
  width:100%;
  display flex;
  align-items:start;
`
