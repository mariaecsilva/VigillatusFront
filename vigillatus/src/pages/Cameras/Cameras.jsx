import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import Trilha from "../../components/TrilhaDeNavegacao/TrilhaDeNavegacao.jsx"
import Voltar from "../../image/icons/Seta-voltar.svg"
import Teste from "../../image/teste/imgExemplo.png"
import {Container, DivFlex, DivCard, Titulo, StyledVoltar, CardTitulo, DivContainer, Setor, ImageCard, DivImage, Linha} from './Style.js'
import { useNavigate, useLocation } from 'react-router-dom'
import { DivConteudo } from "../Ocorrencias/Style.js"
import Paginacao from "../../components/Paginacao/Paginacao.jsx"

export default function Cameras() {
    const [setores, setSetores] = useState([])
    const limite = 4 
    const [offSet, setOffSet] = useState(0)

    // Verificar se setores é um array antes de calcular o total de cards
    const totalCards = setores.length || 0 
    const startIndex = offSet
    const endIndex = startIndex + limite
    const cardsExibir = setores.slice(startIndex, endIndex)
    const navigate = useNavigate()
  
    useEffect(() => {
      // Função para buscar setores da API
      const fetchSetores = async () => {
        try {
          const response = await fetch('https://run.mocky.io/v3/53565acf-2b41-4220-9721-bd2c50ecf5b5')
          const data = await response.json();
          if (Array.isArray(data.cardsExibir)) {
            setSetores(data.cardsExibir);
          } else {
            console.error("A resposta da API não contém um array 'cardsExibir'.");
          }
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
                
                  <DivContainer>
                  <div>
                    <CardTitulo>
                      <Setor>{setor.nome}</Setor> 
                      <StyledVoltar src={Voltar} alt="Voltar" onClick={() => handleVoltarClick('/cameras/setor')} />
                    </CardTitulo>
                    <Linha/>
                  </div>
                    <DivConteudo>
                      <DivImage>
                        <ImageCard src={Teste}></ImageCard>
                        <ImageCard src={Teste}></ImageCard>
                      </DivImage>
                    </DivConteudo>
                  </DivContainer>
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
