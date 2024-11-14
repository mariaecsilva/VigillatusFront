import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import { 
    StyledNavbar, 
    StyledLogo, 
    StyledButtonNotificacao, 
    StyledImagemNotificacao, 
    StyledDivPerfil, 
    StyledPerfil, 
    StyledImagemPerfil, 
    NotificacoesModal,
    ModalTitulo,
    ListaNotificacoes,
    NotificacaoItem
} from './Style.js';
import Logo from '../../image/icons/Logo.svg';
import NotificacaoIcon from '../../image/icons/Notificacao.svg';
import imageUrl from '../../image/teste/imgPerfil.png'
import Gestor from "../../api/Gestor.js";

export default function Navbar() {
    // Estado para gerenciar notificações e visibilidade do modal
    const [mostrarNotificacoes, setMostrarNotificacoes] = useState(false);
    const [notificacoes] = useState(['Nova Ocorrência: Setor 2']); // Simulando notificações

    const gestorService = new Gestor()
    const gestor = gestorService.getLoggedGestor();

    // Hook de navegação
    const navigate = useNavigate();

    const [activeButton, setActiveButton] = useState(null);

    // Alterna a visibilidade do modal de notificações
    const toggleNotificacoes = () => {
        setMostrarNotificacoes(!mostrarNotificacoes);
    };

    // Função para redirecionar para a página de perfil
    const handleProfileClick = () => {
        navigate('/Perfil'); // Redireciona para a página de perfil
    };

    if (gestor.foto) { // Verifica se o usuário possui foto de perfil
        imageUrl = `data:${gestor.foto.contentType};base64,${gestor.foto.data}`;
    } 

    const handleButtonClick = (button, path) => {
        setActiveButton(button);
        navigate(path);
    };

    return (
        <StyledNavbar> 
            <StyledLogo src={Logo} alt="Logo" onClick={() => handleButtonClick('home', '/home')}/>
            
            <StyledDivPerfil>
                <StyledButtonNotificacao onClick={toggleNotificacoes}>
                    <StyledImagemNotificacao src={NotificacaoIcon} alt="Notificação" />
                </StyledButtonNotificacao>

                {/* Modal de Notificações */}
                {mostrarNotificacoes && (
                    <NotificacoesModal>
                        <ModalTitulo>Notificações</ModalTitulo>
                        <ListaNotificacoes>
                            {notificacoes.length > 0 ? (
                                notificacoes.map((notificacao, index) => (
                                    <NotificacaoItem key={index}>{notificacao}</NotificacaoItem>
                                ))
                            ) : (
                                <NotificacaoItem>Sem novas ocorrências</NotificacaoItem>
                            )}
                        </ListaNotificacoes>
                    </NotificacoesModal>
                )}

                {/* Componente de perfil com redirecionamento */}
                <StyledPerfil onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                    <StyledImagemPerfil src={imageUrl} alt="Perfil" />
                    {gestor.nome}
                </StyledPerfil>
            </StyledDivPerfil>
        </StyledNavbar>
    );
}
