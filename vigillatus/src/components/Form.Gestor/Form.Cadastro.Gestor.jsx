// Importa o React e hooks necessários
import React, { useEffect, useState } from "react";
// Importa a configuração da API e estilos
import api from '../../api/api.js';
import { FormWrapper, StyledForm, StyledInput, SubmitButton, ErrorMessage } from './Style.js';
import { useNavigate } from 'react-router-dom'

// Função principal do componente do formulário de cadastro
export default function FormCadastroGestores() {
    // Estado para armazenar os dados do formulário
    const [gestorInfo, setGestorInfo] = useState({
        nome: '',               // Nome do gestor
        email: '',              // Email do gestor
        senha: '',              // Senha do gestor
        confirmarSenha: '',    // Confirmação da senha
        setor: '',              // Setor onde o gestor trabalha
        cargo: ''              // Cargo do gestor
    });

    // Estado para armazenar a foto enviada
    const [foto, setFoto] = useState(null);
    // Estado para armazenar mensagens de erro
    const [error, setError] = useState('');

    const [setorEscolhido, setSetorEscolhido] = useState('')
    const [setores, setSetores] = useState([])

    const navigate = useNavigate();

    // Função para lidar com as mudanças nos campos do formulário
    const handleFormChanges = (e) => {
        const { name, value } = e.target; // Obtém o nome e valor do campo alterado
        // Atualiza o estado com o novo valor do campo
        setGestorInfo({
            ...gestorInfo, [name]: value
        });
    };

    const handleSetorChange = (e) => {
        setSetorEscolhido(e.target.value)
    }

    // Função para lidar com a mudança da imagem (foto)
    const handleImageChange = (e) => {
        setFoto(e.target.files[0]); // Atualiza o estado com a imagem selecionada
    };

    // Função para enviar os dados para o banco de dados
    const sendToDatabase = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        // Verifica se a senha e a confirmação da senha são iguais
        if (gestorInfo.senha !== gestorInfo.confirmarSenha) {
            setError('As senhas não coincidem'); // Define a mensagem de erro
            return; // Interrompe a execução se as senhas não coincidem
        }

        // Cria um novo objeto FormData para enviar os dados
        const formData = new FormData();
        formData.append('nome', gestorInfo.nome);
        formData.append('email', gestorInfo.email);
        formData.append('senha', gestorInfo.senha);
        formData.append('setor', setorEscolhido);
        formData.append('cargo', "Gestor");

        // Adiciona a foto se existir
        if (foto) {
            formData.append('foto', foto);
        }

        try {
            // Envia os dados para a API usando o método POST
            const res = await api.post('/Gestor', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Exibe a resposta no console
            console.log(`Gestor cadastrado com sucesso: `, res);

            // Limpa o formulário após o envio
            setGestorInfo({
                nome: '',
                email: '',
                senha: '',
                confirmarSenha: '',
                setor: '',
                cargo: ''
            });
            setFoto(null); // Limpa a foto
            setError(''); // Limpa a mensagem de erro

            navigate('/')

        } catch (error) {
            // Exibe um erro no console se algo der errado
            console.log('Erro ao cadastrar gestor: ', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const setores = await api.get('/Setor')     

            setSetores(setores.data.setores)
        }


        fetchData()
    }, [])

    // Renderiza o formulário
    return (
        <FormWrapper>
            <StyledForm onSubmit={sendToDatabase}>
                <StyledInput
                    type="text"
                    name='nome'
                    placeholder='Nome do usuário'
                    value={gestorInfo.nome}
                    onChange={handleFormChanges}
                />
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={gestorInfo.email}
                    onChange={handleFormChanges}
                />
                <StyledInput
                    type="password"
                    name='senha'
                    placeholder="Senha"
                    value={gestorInfo.senha}
                    onChange={handleFormChanges}
                />
                <StyledInput
                    type="password"
                    name='confirmarSenha'
                    placeholder="Confirmar Senha"
                    value={gestorInfo.confirmarSenha}
                    onChange={handleFormChanges}
                />
                <StyledInput
                    type="file"
                    name="foto"
                    onChange={handleImageChange}
                />
                <select value={setorEscolhido} onChange={handleSetorChange}>
                    <option value="" disabled>Escolher setor</option>
                    {setores.map((setor) => (
                        <option key={setor._id}>{setor.nome}</option>
                    ))}
                </select>
                {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe mensagem de erro se existir */}
                <SubmitButton type="submit">ENVIAR</SubmitButton>
                <a href="/">FAZER LOGIN</a> {/* Link para a página de login */}
            </StyledForm>
        </FormWrapper>
    );
}