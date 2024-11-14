import React from 'react';
import { Navigate } from 'react-router-dom';
import Gestor from '../api/Gestor';

const AuthMiddleware = ({ children }) => {
    const gestorService = new Gestor();

    if (!gestorService.isLoggedIn()) {
        return <Navigate to="/" replace />; // Redireciona para a página de login
    }

    return children; // Retorna os filhos (componentes de página) se o usuário estiver logado
};

export default AuthMiddleware;