import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Paginacao from "../../components/Paginacao/Paginacao.jsx";
import PlusIcon from '../../image/teste/plus-icon.png'; 
import defaultImg from "../../image/teste/foto.png"
import { FiSearch } from 'react-icons/fi';
import { Buffer } from 'buffer';
import {
  Container,
  EmailTableCell,
  StyledContainer,
  Title,
  TableContainer,
  AdicionarButton,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
  ProfileImage,
  HeaderRow,
  HeaderCell,
  TableBody,
  ViewProfileButton,
  SearchContainer,
  SearchInput
} from './ColaboradorStyle';
import { useNavigate } from "react-router-dom";
import Gestor from "../../api/Gestor.js";
import api from "../../api/api.js";

// Componente da Tabela
const Tabela = ({ filtro, dadosColaboradores, offSet, limite }) => {
  const navigate = useNavigate();

  const startIndex = offSet;
  const endIndex = startIndex + limite;
  const colaboradoresExibir = dadosColaboradores.slice(startIndex, endIndex);

  // Filtro de dados
  const filteredData = colaboradoresExibir.filter(({ nome, email, telefone }) => 
    nome.toLowerCase().includes(filtro.toLowerCase()) ||
    email.toLowerCase().includes(filtro.toLowerCase()) ||
    telefone.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <HeaderRow>
            <HeaderCell></HeaderCell>
            <HeaderCell>Nome</HeaderCell>
            <HeaderCell>Atuação</HeaderCell>
            <HeaderCell>Contato</HeaderCell>
            <HeaderCell></HeaderCell>
          </HeaderRow>
        </thead>
        <TableBody>
          {filteredData.map(({ _id, nome, email, telefone, foto }) => (
            <StyledTableRow key={_id}> 
              <StyledTableCell>
              <ProfileImage 
                src={foto && foto.data ? `data:${foto.contentType};base64,${Buffer.from(foto.data).toString('base64')}` : defaultImg} 
                alt="imgUrl" 
              />
              </StyledTableCell>
              <StyledTableCell><span>{nome}</span></StyledTableCell>
              <StyledTableCell><span>{email}</span></StyledTableCell>
              <StyledTableCell><EmailTableCell><span>{telefone}</span></EmailTableCell></StyledTableCell>
              <StyledTableCell>
                <ViewProfileButton onClick={() => navigate(`/perfilcolaborador/${_id}`)}>Perfil</ViewProfileButton>
              </StyledTableCell>  
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

// Componente principal de Colaboradores
export default function Colaboradores() {
  const [filtro, setFiltro] = useState('');
  const [dadosColaboradores, setDadosColaboradores] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const limite = 5; // Número de colaboradores por página
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);  // Para armazenar os dados filtrados
  const navigate = useNavigate();

  const gestorServices = new Gestor();
  const gestor = gestorServices.getLoggedGestor();

  // Buscar colaboradores na API
  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const res = await api.get("/Colaborador", {
          headers: {
            "Content-Type": "application/json", 
            "authorization": gestorServices.getToken()
          },
          params: {
            userId: gestor._id
          }
        });
        const data = res.data;
        setDadosColaboradores(data);
        setFilteredColaboradores(data);  // Armazenar todos os dados inicialmente
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    if (gestor && gestor._id) {
      fetchColaboradores();
    }
  }, [gestor]);

  // Aplicando o filtro na lista de colaboradores
  useEffect(() => {
    const filteredData = dadosColaboradores.filter(({ nome, email, telefone }) =>
      nome.toLowerCase().includes(filtro.toLowerCase()) ||
      email.toLowerCase().includes(filtro.toLowerCase()) ||
      telefone.toLowerCase().includes(filtro.toLowerCase())
    );
    setFilteredColaboradores(filteredData);  // Atualizar a lista filtrada
  }, [filtro, dadosColaboradores]);

  const totalCards = filteredColaboradores.length;  // Agora, o total de cards é baseado nos dados filtrados

  return (
    <div className="app">
      <Navbar />
      <Container>
        <StyledContainer>
          <Title>Colaboradores</Title>
          <SearchContainer>
            <FiSearch />
            <SearchInput 
              type="text" 
              placeholder="Pesquisar..." 
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)} 
            />
          </SearchContainer>
          <TableContainer>
            <Tabela 
              filtro={filtro} 
              dadosColaboradores={filteredColaboradores}  // Passando a lista filtrada
              offSet={offSet} 
              limite={limite} 
            />
          </TableContainer>
          {/* Botão Adicionar e Paginação*/}
          <AdicionarButton onClick={() => navigate('/adicionarColaborador')}>
            <img src={PlusIcon} alt="Adicionar" style={{ marginTop: '3px', marginRight: '20px', width: '17px', height: '16px' }} />
            Adicionar
          </AdicionarButton>
          <Paginacao limite={limite} total={totalCards} offSet={offSet} setOffSet={setOffSet} />
        </StyledContainer>
      </Container>
      <Sidebar />
    </div>
  );
}
