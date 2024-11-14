import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import defaultImg from "../../image/teste/foto.png";
import Imagem8 from '../../image/teste/Imagem8.png';
import { useNavigate } from "react-router-dom";
import { FiSliders } from 'react-icons/fi';
import {
  Container,
  Page,
  ProfileImage,
  ProfileName,
  ProfileTitle,
  FilterInput,
  ProfileEmail,
  Content,
  Header,
  Title,
  FilterButton,
  Table,
  Th,
  Td,
  Pagination,
  PageButton,
  BackButton,
  ProfileDetails,
  Trabalhador,
  PageTitle
} from "./PerfilStyle";
import api from "../../api/api";
import Gestor from "../../api/Gestor";
import { useParams } from "react-router-dom";
import { Buffer } from 'buffer';

export default function PerfilColaborador() {
  const [colaborador, setColaborador] = useState(null);
  const [ocorrencias, setOcorrencias] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/colaboradores");
  };

  const handleFilterChange = (event) => {
    const textoFiltro = event.target.value;
    setFiltro(textoFiltro);

    const ocorrenciasFiltradas = ocorrencias.filter((ocorrencia) =>
      ocorrencia.setor.toLowerCase().includes(textoFiltro.toLowerCase()) ||
      ocorrencia.status.toLowerCase().includes(textoFiltro.toLowerCase())
    );

    setOcorrencias(ocorrenciasFiltradas);
  };

  const toggleFiltro = () => {
    setMostrarFiltro(!mostrarFiltro);
    setFiltro('');
    setOcorrencias(ocorrencias);
  };

  const gestorServices = new Gestor();
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const colaborador = await api.get(`/colaboradores/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "authorization": gestorServices.getToken()
        }
      });
      setColaborador(colaborador.data);

      const ocorrencias = [
        { id: 1, data: '28/08/2024', hora: '12:30', setor: 'Setor 2', status: 'Notificado', imagem: Imagem8 },
      ];

      setOcorrencias(ocorrencias);
    };
    loadData();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Container>
        <PageTitle>Colaboradores</PageTitle>
        <Page>
          {colaborador ? (
            <ProfileDetails>
              <Trabalhador>
                <BackButton onClick={handleBack} />
                <ProfileImage
                  src={colaborador.foto ? `data:${colaborador.foto.contentType};base64,${Buffer.from(colaborador.foto.data).toString('base64')}` : defaultImg}
                  alt="imgPerfil"
                />
                <ProfileName>{colaborador.nome}</ProfileName>
                <ProfileTitle>{colaborador.registro}</ProfileTitle>
                <ProfileEmail>{colaborador.email}</ProfileEmail>
              </Trabalhador>
              <Content>
                <Header>
                  <Title>Últimas Ocorrências</Title>
                  <FilterButton onClick={toggleFiltro}>
                    <FiSliders /> Filtro
                  </FilterButton>
                  {mostrarFiltro && (
                    <FilterInput
                      type="text"
                      value={filtro}
                      onChange={handleFilterChange}
                      placeholder="Filtrar por setor ou status"
                    />
                  )}
                </Header>
                <Table>
                  <thead>
                    <tr>
                      <Th>Data</Th>
                      <Th>Hora</Th>
                      <Th>Setor</Th>
                      <Th>Status</Th>
                      <Th>Imagens</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {ocorrencias.map((ocorrencia) => (
                      <tr key={ocorrencia.id}>
                        <Td>{ocorrencia.data}</Td>
                        <Td>{ocorrencia.hora}</Td>
                        <Td>{ocorrencia.setor}</Td>
                        <Td>{ocorrencia.status}</Td>
                        <Td>
                          <img src={ocorrencia.imagem} alt={`Imagem ${ocorrencia.id}`} width="80" />
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination>
                  <PageButton>1</PageButton>
                  <PageButton>2</PageButton>
                  <PageButton>3</PageButton>
                </Pagination>
              </Content>
            </ProfileDetails>
          ) : (
            <p>Colaborador não encontrado.</p>
          )}
        </Page>
      </Container>
      <Sidebar />
    </div>
  );
}
