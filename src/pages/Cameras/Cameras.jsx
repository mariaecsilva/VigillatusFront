import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import Trilha from "../../components/TrilhaDeNavegacao/TrilhaDeNavegacao.jsx"
import Voltar from "../../image/icons/Seta-voltar.svg"
import Teste from "../../image/teste/imgExemplo.png"
import {Container, DivFlex, DivCard, Titulo, StyledVoltar, CardContainer, Setor, ImageCard, DivImage} from './Style.js'
import { useNavigate, useLocation } from 'react-router-dom'
import { DivConteudo } from "../Ocorrencias/Style.js"
import Paginacao from "../../components/Paginacao/Paginacao.jsx"

export default function Cameras() {
    const [setores, setSetores] = useState([])
    const limite = 4 
    const [offSet, setOffSet] = useState(0)
    const totalCards = setores.length
    const startIndex = offSet
    const endIndex = startIndex + limite
    const cardsExibir = setores.slice(startIndex, endIndex)
    const navigate = useNavigate()
  
    useEffect(() => {
      // Função para buscar setores da API
      const fetchSetores = async () => {
        try {
          const response = await fetch('https://run.mocky.io/v3/4f9fdeb6-54ba-46bd-9261-dc294f8daf3c')// Substitua pela URL da sua API
          const data = await response.json();
          setSetores(data);
        } catch (error) {
          console.error("Erro ao buscar setores:", error)
        }
      };
  
      fetchSetores()
    }, [])
  
    const handleVoltarClick = (path) => {
      navigate(path);
    };
  
    return (
      <div className="app">
        <Navbar />
        <Container>
          <Titulo>Câmeras</Titulo>
          <Trilha />
          <DivCard>
            <DivFlex>
              {cardsExibir.map((setor) => (
                <Card key={setor.id}>
                  <div>
                    <CardContainer>
                      <Setor>{setor.nome}</Setor> 
                      <StyledVoltar src={Voltar} alt="Voltar" onClick={() => handleVoltarClick('/cameras/setor')} />
                    </CardContainer>
                    <DivConteudo>
                      <DivImage>
                        <ImageCard src={Teste}></ImageCard>
                        <ImageCard src={Teste}></ImageCard>
                      </DivImage>
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
    )
  }