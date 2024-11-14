import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import ImagemExemplo from "../../image/teste/imgExemplo.png"
import { DivCard, Container, DivFlex, Titulo, CardContainer, Setor, DivConteudo, ImagemCard, ButtonVerMais, DivTexto } from "./Style"
import SubNavbar from "../../components/SubNavbar/SubNavbar.jsx"
import Paginacao from "../../components/Paginacao/Paginacao.jsx"

export default function Ocorrencias() {
    const navigate = useNavigate()
    const handleButtonClick = (path) => {
        navigate(path)
    };

    const limite = 4 
    const [offSet, setOffSet] = useState(0)
    const [dadosOcorrencias, setDadosOcorrencias] = useState([])
    const totalCards = dadosOcorrencias.length
    const startIndex = offSet
    const endIndex = startIndex + limite
    const cardsExibir = dadosOcorrencias.slice(startIndex, endIndex)
    

    useEffect(() => {
        const fetchOcorrencias = async () => {
            try {
                const response = await fetch("https://run.mocky.io/v3/85619f74-aebd-42ae-846d-13ac1807277c");
                const data = await response.json();
                setDadosOcorrencias(data.cardsExibir); 
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchOcorrencias();
    }, []);

    return (
        <div className="app">
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
                                        <ImagemCard src={ImagemExemplo} alt="" />
                                        <DivTexto>
                                            <h2>Colaborador não identificado</h2>
                                            <p>{card.data}</p>
                                            <ButtonVerMais onClick={() => handleButtonClick(`/ocorrencias/${card.id}`)}>
                                                Ver Mais
                                            </ButtonVerMais>
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
        </div>
    );
}
