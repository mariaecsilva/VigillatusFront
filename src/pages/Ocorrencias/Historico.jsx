import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import Card from "../../components/Card/Card";
import { DivCard, Container, DivFlex, Titulo, CardContainer, Setor, DivConteudo, ImagemCard, ButtonVerMais, DivTexto } from "./Style";
import Paginacao from "../../components/Paginacao/Paginacao.jsx";

export default function Historico() {
  const limite = 4;
  const [offSet, setOffSet] = useState(0);
  const [dadosHistorico, setDadosHistorico] = useState([]);
  
  const totalCards = dadosHistorico.length;
  const startIndex = offSet;
  const endIndex = startIndex + limite;
  const cardsExibir = dadosHistorico.slice(startIndex, endIndex);

  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  // Função para buscar dados da API
  useEffect(() => {
    const fetchHistorico = async () => {
        try {
            const response = await fetch("https://run.mocky.io/v3/85619f74-aebd-42ae-846d-13ac1807277c");
            const data = await response.json();
            setDadosHistorico(data.cardsExibir); 
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    fetchHistorico();
}, []);


  return (
    <>
      <Navbar />
      <Container>
        <Titulo>Ocorrências</Titulo>
        <SubNavbar />
        <DivCard>
          <DivFlex>
            {cardsExibir.map((card) => (
              <Card key={card.id}>
                <div>
                  <CardContainer>
                    <Setor>{card.setor}</Setor> 
                  </CardContainer>
                  <DivConteudo>
                    <ImagemCard src={card.imagemUrl} alt="" /> 
                    <DivTexto>
                      <h2>{card.colaborador}</h2> 
                      <p>{card.data}</p> 
                      <ButtonVerMais onClick={() => handleButtonClick(`/ocorrencias/novaocorrencia/${card.id}`)}>Ver Mais</ButtonVerMais>
                    </DivTexto>
                  </DivConteudo>
                </div>
              </Card>
            ))}
          </DivFlex>
        </DivCard>
        <Paginacao limite={limite} total={totalCards} offSet={offSet} setOffSet={setOffSet} />
      </Container>
      <Sidebar />
    </>
  );
}
