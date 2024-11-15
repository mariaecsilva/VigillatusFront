import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Linha, DivFlex, UlRota, LiRota, LinkRota, Arrow } from './Style.js';

export default function TrilhaDeNavegacao() {
    const location = useLocation(); // Obtém a localização atual (a URL ativa)
    const [trilha, setTrilha] = useState([]);

    useEffect(() => {
        const caminho = location.pathname.split("/").filter(x => x); // Remove valores vazios do array

        // Verifica se a rota /cameras foi acessada
        const camerasAcessada = caminho.includes("cameras");

        if (camerasAcessada) {
            // Filtra o caminho para começar a partir de /cameras
            const indexCameras = caminho.indexOf("cameras"); // Encontra o índice de cameras no array
            const trilhaData = caminho.slice(indexCameras).map((part, index) => { // Cria um novo array que começa em Cameras
                return {
                    label: part.charAt(0).toUpperCase() + part.slice(1),
                    path: "/" + caminho.slice(0, indexCameras + index + 1).join("/")
                };
            });

            setTrilha(trilhaData); // Atualiza a trilha apenas se /cameras foi acessada
        } else {
            setTrilha([]); // Reseta a trilha se não estiver em /cameras
        }
    }, [location]); // O useEffect será executado sempre que a localização mudar.

    return (
        <DivFlex>
            <div className="trilha">
                <Linha>
                {trilha.length > 0 && ( // Verifica se há itens na trilha
                    <UlRota>
                        {trilha.map((item, index) => (
                            <LiRota key={index}>
                                <LinkRota to={item.path}> {item.label} {index < trilha.length - 1 && <Arrow>&gt;</Arrow>} </LinkRota>
                            </LiRota>
                        ))}
                    </UlRota>
                )}
                </Linha>
            </div>
        </DivFlex>
    );
}
