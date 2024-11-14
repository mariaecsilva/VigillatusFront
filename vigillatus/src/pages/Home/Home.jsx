import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  CardsContainer,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardDetails,
  CardFooter,
  CardImage,
  CardInfo,
  SeeAllButton,
  ChartSection,
  ChartContainer,
  ChartTitle,
} from "./Style";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import Gestor from "../../api/Gestor";

export default function Home() {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const navigate = useNavigate();

  const gestorService = new Gestor()
  const gestor = gestorService.getLoggedGestor();

  // Função para buscar ocorrências do servidor
  const fetchOcorrencias = async () => {
    try {
      const response = await fetch('/api/ocorrencias');
      const data = await response.json();
      setOcorrencias(data);
    } catch (error) {
      console.error('Erro ao buscar ocorrências:', error);
    }
  };

  // Função para buscar dados dos gráficos
  const fetchGraficoData = async () => {
    try {
      const response = await fetch('/api/ocorrencias/graficos');
      const data = await response.json();
      setLineData(data.lineData);
      setBarData(data.barData);
    } catch (error) {
      console.error('Erro ao buscar dados para gráficos:', error);
    }
  };

  useEffect(() => {
    fetchOcorrencias();
    fetchGraficoData();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Container>
        <Title>Últimas Ocorrências</Title>
        <CardsContainer>
          {ocorrencias.map((ocorrencia) => (
            <Card key={ocorrencia.id}>
              <CardHeader>
                <CardTitle>{ocorrencia.nomeColaborador}</CardTitle>
              </CardHeader>
              <CardFooter>
                <CardImage src={ocorrencia.imagem} alt="Imagem do Card" />
                <CardInfo>
                  <CardSubtitle>{ocorrencia.setor}</CardSubtitle>
                  <CardDetails>{ocorrencia.data}</CardDetails>
                  <CardDetails>{`${ocorrencia.setor} - CAM ${ocorrencia.cam}`}</CardDetails>
                </CardInfo>
              </CardFooter>
            </Card>
          ))}
        </CardsContainer>

        {/* Botão "VER TODOS" */}
        <SeeAllButton onClick={() => navigate('/ocorrencias')}>VER TODOS</SeeAllButton>

        <ChartSection>
          <ChartContainer>
            <ChartTitle>Ocorrências na Última Semana</ChartTitle>
            <LineChart width={550} height={390} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#8884d8" dot={true} />
            </LineChart>
          </ChartContainer>

          <ChartContainer>
            <ChartTitle>Ocorrências por Setor</ChartTitle>
            <BarChart width={400} height={390} data={barData}>
              <CartesianGrid strokeDasharray="3 3" strokeWidth={1} />
              <XAxis dataKey="setor" stroke="#8884d8" strokeWidth={0.1} />
              <YAxis stroke="#8884d8" strokeWidth={0.2} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#4B7296" strokeWidth={1} barSize={30} />
            </BarChart>
          </ChartContainer>
        </ChartSection>
      </Container>
      <Sidebar />
    </div>
  );
}
