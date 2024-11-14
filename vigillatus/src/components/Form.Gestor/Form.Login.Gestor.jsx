import React, { useState } from "react";
import api from '../../api/api.js';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, StyledForm, StyledInput, SubmitButton, ErrorMessage, StyledContainer } from './Style.js';
import Gestor from "../../api/Gestor.js";
import Logo from '../../image/teste/LogoDois.png'

// Componente de formulário de login para gestores
export default function FormLoginGestores() {
    // Estado para armazenar as informações de login
    const [loginInfo, setLoginInfo] = useState({
        email: '', // Email do gestor
        senha: ''  // Senha do gestor
    });

    // Estado para armazenar mensagens de erro
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para redirecionamento de rotas

    // Função para lidar com as mudanças nos campos do formulário
    const handleFormChanges = (e) => {
        const { name, value } = e.target;
        // Atualiza o estado com os novos valores dos campos
        setLoginInfo({
            ...loginInfo, [name]: value
        });
    };

    // Função para processar o login
    const handleLogin = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        try {
            // Envia os dados de login para a API
            const res = await api.post('/Gestor/Login', {
                email:loginInfo.email,
                senha: loginInfo.senha
            });

            console.log('Login realizado com sucesso: ', res);

            const gestorService = new Gestor();
            gestorService.loggedGestor(res.data.gestor)

            const {token} = res.data;
            gestorService.setToken(token)

            // Redireciona para a página principal ou dashboard após o login
            navigate('/home');
            
        } catch (error) {
            console.log('Erro ao fazer login: ', error);
            setError('Email ou senha inválidos'); // Define uma mensagem de erro
        }
    };

    // Renderiza o formulário de login
    return (
        <FormWrapper>
            <StyledContainer>
                <img src={Logo} alt="Logo" style={{ width: '50%', height: 'auto' }} />
            </StyledContainer>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginInfo.email}
                    onChange={handleFormChanges}
                />
                <StyledInput
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={loginInfo.senha}
                    onChange={handleFormChanges}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro se existir */}
                <SubmitButton type="submit">FAZER LOGIN</SubmitButton>
                <a href="/cadastrar">CADASTRAR-SE</a> {/* Link para a página de cadastro */}
            </StyledForm>
        </FormWrapper>
    );
}