import styled from "styled-components";

// Container principal com ajuste menor de padding-top
export const Container = styled.div`
    background-color: #E5E5E5;
    width: 100vw;
    height: 1080px;
    padding: 0px 0 0 90px;
    position: absolute;
    z-index: 1; 
`;

// Títulos e Seções
export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
    font-size: 60px;
    font-weight: bold; 
    margin-left: 100px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 120px;
  margin-left: 40px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4B7296;
  color: #fff;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 180px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding-left: 15px;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  border-bottom: 2px solid #fff;
  padding-bottom: 8px;
  text-align: center;
`;

export const CardSubtitle = styled.p`
  margin: 3px 0;
  font-weight: bold;
  font-size: 18px;
  margin-left: 35px;
`;

export const CardDetails = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 17px;
  margin-left: 35px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CardImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  margin-left: 20px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// Botão estilizado
export const SeeAllButton = styled.button`
  background-color: #4B7296;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 15px 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  &:hover {
    background-color: #365f7f;
  }
`;

// Seção para gráficos
export const ChartSection = styled.div`
  margin-top: 70px;
  display: flex;
  gap: 50px;
  width: 100%;
  justify-content: center;
  margin-left: 20px;
`;

export const ChartContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px; /* Ajuste do tamanho do gráfico */
  height: 450px; /* Ajuste do tamanho do gráfico */
`;

export const ChartTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;
