import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Dropdown from "../../components/Dropdown/Drobdown.jsx"
import ImgOcorrencia from '../../image/teste/imgOcorrencia.png'
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import {DivBotoes, DivInputs, BarraTitulo, ButtonApagar, ButtonSair, ButtonSalvar, Container, DivImagem, DivInformacoes, DivOcorrencia, DivDados, ImageOcorrencia, Section, Titulo} from './Style.js'

export default function NovaOcorrencia(){
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [setor, setSetor] = useState('');
    const [camera, setCamera] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleButtonClick = (path) => {
        navigate(path);
      };
    
       // Fetch data from the API
    useEffect(() => {
        // Simulação de uma chamada de API - substitua pela sua URL da API
        fetch('URL_DA_SUA_API')
          .then(response => response.json())
          .then(data => {
              // Ajuste os campos conforme os dados da sua API
              setSetor(data.setor);
              setCamera(data.camera);
              setData(data.data);
              setHora(data.hora);
          })
          .catch(error => console.error("Erro ao buscar dados:", error));
    }, []);

    return(
        <div className="app">
            <Navbar />
               <Container>
                    <Titulo>Ocorrências</Titulo>
                    <DivOcorrencia>
                        <BarraTitulo>
                             <p>Nova Ocorrência</p>
                             <ButtonSair onClick={() => handleButtonClick('/ocorrencias')}>X</ButtonSair>
                        </BarraTitulo>
                        <Section>
                            <DivImagem> 
                                <ImageOcorrencia src={ImgOcorrencia}/> 
                                <ImageOcorrencia src={ImgOcorrencia}/> 
                            </DivImagem>
                            <DivDados> 
                                <DivInformacoes>
                                    <div>
                                        <p>Setor: </p>
                                        <p>Camêra: </p>
                                        <p>Data: </p>
                                        <p>Hora: </p>
                                        
                                    </div>
                                    <div style={{fontWeight: 'bold', margin:'20px'}}>
                                        <p>{setor}</p>
                                        <p>{camera}</p>
                                        <p>{data}</p>
                                        <p>{hora}</p>
                                    </div>
                                </DivInformacoes>
                                <DivInputs>
                                    <div>
                                        <p>Colaborador: </p>
                                        <p>Status: </p> 
                                    </div>
                                    <div style={{marginLeft: '20px'}}>
                                    <input type="text" placeholder=" Digite o nome do colaboradorx" style={{ outline: 'none', border: '1px solid #ccc', padding: '5px' }} 
           onFocus={(e) => e.target.style.outline = '1px solid #333'}
           onBlur={(e) => e.target.style.outline = 'none'} />
                                        <Dropdown/>
                                    </div>
                                </DivInputs>
                                <DivBotoes>
                                        <ButtonApagar>Apagar</ButtonApagar>
                                        <ButtonSalvar style={{marginRight: '30px'}}>Salvar</ButtonSalvar>
                                </DivBotoes>
                            </DivDados>
                        </Section>
                    </DivOcorrencia>
               </Container>
            <Sidebar />
        </div>
    )
};