import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Logo from '../../image/icons/Logo.svg';
import Foto from '../../image/teste/foto.png';
import {
    DivBotoes, DivInputs, BarraTitulo, ImageFoto, ButtonSair, ButtonSalvar,
    Container, DivImagem, DivInformacoes, DivOcorrencia, DivDados,
    ImageOcorrencia, Section, Titulo, ButtonAddImage, DivImagemBotao,
    SelectInput,
    DivTitulo
} from './AdicionarStyle.js';
import Gestor from '../../api/Gestor.js';
import { useState } from 'react';
import api from '../../api/api.js';

export default function AdicionarColaborador() {
    const [colaboradorInfo, setColaboradorInfo] = useState({
        nome: '',
        email: '',
        telefone: '',
        registro: ''
    })
    const [foto, setFoto] = useState(null);

    const [setorEscolhido, setSetorEscolhido] = useState('')
    const [setores, setSetores] = useState([])

    const [cargoEscolhido, setCargoEscolhido] = useState('')
    const [cargos, setCargos] = useState([])

    const navigate = useNavigate(); // Inicializa o navigate

    useEffect(() => {
        const fetchData = async () => {
            const setores = await api.get('/Setor')
            const cargos = await api.get('/Cargo')

            setSetores(setores.data.setores)
            setCargos(cargos.data.cargos.slice(1))
        }


        fetchData()
    }, [])

    const handleSetorChange = (e) => {
        setSetorEscolhido(e.target.value)
    }

    const handleCargoChange = (e) => {
        setCargoEscolhido(e.target.value)
    }

    const handleFormChanges = (e) => {
        const { name, value } = e.target; // Obtém o nome e valor do campo alterado
        // Atualiza o estado com o novo valor do campo
        setColaboradorInfo({
            ...colaboradorInfo, [name]: value
        });
    };

    const handleSairClick = () => {
        navigate('/colaboradores'); // Substitua '/colaboradores' pela rota correta
    };

    const gestorServices = new Gestor()
    const gestor = gestorServices.getLoggedGestor()

    const handleImageChange = (e) => {
        setFoto(e.target.files[0]); // Atualiza o estado com a imagem selecionada
    };

    const sendToDatabase = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário

        // Cria um novo objeto FormData para enviar os dados
        const formData = new FormData();
        formData.append('nome', colaboradorInfo.nome);
        formData.append('email', colaboradorInfo.email);
        formData.append('telefone', colaboradorInfo.telefone);
        formData.append('registro', colaboradorInfo.registro);
        formData.append('setor', setorEscolhido);
        formData.append('cargo', cargoEscolhido);
        formData.append('gestorId', gestor._id);

        // Adiciona a foto se existir
        if (foto) {
            formData.append('foto', foto);
        }

        try {
            // Envia os dados para a API usando o método POST
            const res = await api.post('/Colaborador', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': gestorServices.getToken()
                }
            });

            // Exibe a resposta no console
            console.log(`Colaborador cadastrado com sucesso: `, res);

            // Limpa o formulário após o envio
            setColaboradorInfo({
                nome: '',
                email: '',
                telefone: '',
                registro: '',
            });
            setFoto(null); // Limpa a foto
            setSetorEscolhido('')
            setCargoEscolhido('')

            navigate('/colaboradores');

        } catch (error) {
            // Exibe um erro no console se algo der errado
            console.log('Erro ao cadastrar o colaborador: ', error);
        }
    };

    return (
        <div className="app">
            <Navbar />
            <Container>
                <DivTitulo><Titulo>Colaboradores</Titulo></DivTitulo>
                <DivOcorrencia>
                    <BarraTitulo>
                        <p>Adicionar Colaborador</p>
                        <ButtonSair onClick={handleSairClick}>X</ButtonSair>
                    </BarraTitulo>
                    <Section>
                        <DivImagem>
                        <ImageFoto src={Foto} alt="Foto do colaborador" />
                                    <ButtonAddImage> <input type='file' onChange={handleImageChange}>
                                    </input></ButtonAddImage>
                        </DivImagem>
                        <DivDados>
                            <form onSubmit={sendToDatabase}>
                                <DivInputs>
                                    <div>
                                        <p>Nome: </p>
                                        <p>Email: </p>
                                        <p>Telefone: </p>
                                        <p>Registro: </p>
                                        <p>Setor: </p>
                                        <p>Cargo: </p>
                                    </div>
                                    <div style={{ marginLeft: '60px' }}>
                                        <input type="text" name="nome" value={colaboradorInfo.nome} onChange={handleFormChanges} placeholder="" style={{ outline: 'none', border: '1px solid #ccc', padding: '5px' }}
                                            onFocus={(e) => e.target.style.outline = '1px solid #333'}
                                            onBlur={(e) => e.target.style.outline = 'none'} />
                                        <input type="text" name="email" value={colaboradorInfo.email} onChange={handleFormChanges} placeholder="" style={{ outline: 'none', border: '1px solid #ccc', padding: '5px' }}
                                            onFocus={(e) => e.target.style.outline = '1px solid #333'}
                                            onBlur={(e) => e.target.style.outline = 'none'} />
                                        <input type="text" name="telefone" value={colaboradorInfo.telefone} onChange={handleFormChanges} placeholder="" style={{ outline: 'none', border: '1px solid #ccc', padding: '5px' }}
                                            onFocus={(e) => e.target.style.outline = '1px solid #333'}
                                            onBlur={(e) => e.target.style.outline = 'none'} />
                                        <input type="text" name="registro" value={colaboradorInfo.registro} onChange={handleFormChanges} placeholder="" style={{ outline: 'none', border: '1px solid #ccc', padding: '5px' }}
                                            onFocus={(e) => e.target.style.outline = '1px solid #333'}
                                            onBlur={(e) => e.target.style.outline = 'none'} />
                                        <SelectInput value={setorEscolhido} onChange={handleSetorChange}>
                                            <option value="" disabled>Escolher setor</option>
                                            {setores.map((setor) => (
                                                <option key={setor._id}>{setor.nome}</option>
                                            ))}
                                        </SelectInput>
                                        <SelectInput value={cargoEscolhido} onChange={handleCargoChange}>
                                            <option value="" disabled>Escolher cargo</option>
                                            {cargos.map((cargo) => (
                                                <option key={cargo._id}>{cargo.nome}</option>
                                            ))}
                                        </SelectInput>
                                    </div>
                                </DivInputs>
                                <DivBotoes>
                                    <ButtonSalvar type="submit">Salvar</ButtonSalvar>
                                </DivBotoes>
                            </form>
                        </DivDados>
                    </Section>
                </DivOcorrencia>
            </Container>
            <Sidebar />
        </div>
    );
}
