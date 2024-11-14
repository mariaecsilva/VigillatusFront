// Importa os componentes de páginas que serão usadas nas rotas
import './App.css';
import CadastrarGestor from './pages/Form.Gestor/Cadastrar.Gestor'; // Página de cadastro do gestor
import LoginGestor from './pages/Form.Gestor/Login.Gestor'; // Página de login do gestor
import Home from './pages/Home/Home'; // Página inicial
import Cameras from './pages/Cameras/Cameras'; // Página de câmeras
import Colaboradores from './pages/Colaborador/Colaboradores'; // Página de colaboradores
import Ocorrencias from './pages/Ocorrencias/Ocorrencias'; // Página de ocorrências
import PerfilColaborador from './pages/Colaborador/Perfil.Colaborador'; // Página de perfil do colaborador
import AdicionarColaborador from './pages/Colaborador/Adicionar.Colaborador'; // Página de adicionar perfil do colaborador
import Perfil from './pages/Perfil.Gestor/Perfil.Gestor'; // Página de perfil do gestor
import Historico from './pages/Ocorrencias/Historico'; // Página de histórico
import Setor from './pages/Cameras/Setor'; // Página de setor
import NovaOcorrencia from './pages/Ocorrencias/NovaOcorrencia'; // Página de Nova Ocorrencia
import AuthMiddleware from './middlewares/authmiddleware';

// Importa os componentes necessários para configurar o roteamento
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Biblioteca para roteamento no React

export default function App() {
  return (
    <div className='app'> {/* Contêiner principal da aplicação */}
      {/* Configura o roteamento da aplicação */}
      <BrowserRouter> {/* Define o roteador para a aplicação */}
        <Routes>
          <Route index element={<LoginGestor />} />
          <Route path='/cadastrar' element={<CadastrarGestor />} />
          <Route path='/home' element={<AuthMiddleware><Home /></AuthMiddleware>} />
          <Route path='/cameras' element={<AuthMiddleware><Cameras /></AuthMiddleware>} />
          <Route path='/colaboradores' element={<AuthMiddleware><Colaboradores /></AuthMiddleware>} />
          <Route path='/ocorrencias' element={<AuthMiddleware><Ocorrencias /></AuthMiddleware>} />
          <Route path='/perfilcolaborador/:id' element={<AuthMiddleware><PerfilColaborador /></AuthMiddleware>} />
          <Route path='/perfil' element={<AuthMiddleware><Perfil /></AuthMiddleware>} />
          <Route path='/adicionarcolaborador' element={<AuthMiddleware><AdicionarColaborador /></AuthMiddleware>} />
          <Route path='/ocorrencias/historico' element={<AuthMiddleware><Historico /></AuthMiddleware>} />
          <Route path='/cameras/setor' element={<AuthMiddleware><Setor /></AuthMiddleware>} />
          <Route path='/ocorrencias/novaocorrencia' element={<AuthMiddleware><NovaOcorrencia /></AuthMiddleware>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
