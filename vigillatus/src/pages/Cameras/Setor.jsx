import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TrilhaDeNavegacao from "../../components/TrilhaDeNavegacao/TrilhaDeNavegacao";
import {Container, Titulo} from './Style';

export default function Setor(){
    return(
        <div className="app">
            <Navbar />
            <Container> 
                <Titulo>Setor</Titulo>
                <TrilhaDeNavegacao/>
            </Container>
            <Sidebar/>
        </div>
    )
};