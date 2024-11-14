import React from "react";

export default function NavBar() {
    return(
        <div className="app" style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <a href="/dashboard">HOME</a>
            <a href="">COLABORADORES</a>
            <a href="">CÂMERAS</a>
            <a href="">OCORRÊNCIAS</a>
            <a href="/gestor">TELA DO GESTOR</a>
        </div>
    );
}