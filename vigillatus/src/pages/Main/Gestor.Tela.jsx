import React, { useEffect, useState } from 'react';
import api from '../../api/api.js';
import NavBar from '../../components/Main/NavBar';

export default function TelaGestor() {
    // Estado para armazenar os dados do gestor
    const [gestor, setGestor] = useState(null);

    // useEffect para buscar os dados do gestor ao montar o componente
    useEffect(() => {
        const fetchGestorData = async () => {
            try {
                // Obtém o token de autenticação do localStorage
                const token = localStorage.getItem('authToken');

                // Configura os headers para enviar o token na requisição
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                // Faz a requisição para obter os dados do gestor
                const res = await api.get('/Gestor/Dados', config);

                // Armazena os dados do gestor no estado
                setGestor(res.data);

            } catch (error) {
                // Exibe um erro no console se a requisição falhar
                console.error('Erro ao obter os dados do gestor: ', error);
            }
        };

        // Chama a função para buscar os dados do gestor
        fetchGestorData();
    }, []); // O array vazio [] garante que a função seja executada apenas uma vez após a montagem do componente

    return(
        <div className="app">
            <NavBar/>
            
            {/* Exibe as informações do gestor se estiverem disponíveis */}
            {gestor ? (
                <div>
                    <h1>Bem-vindo, {gestor.nome}</h1>
                    <p>Email: {gestor.email}</p>
                    <p>Setor: {gestor.setor}</p>
                    <p>Cargo: {gestor.cargo}</p>
                </div>
            ) : (
                // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
                <p>Carregando...</p>
            )}

            <button>EDITAR</button>
        </div>
    );
}
