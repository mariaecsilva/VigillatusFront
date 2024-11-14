import React from "react";
import FormCadastroGestores from "../../components/Form.Gestor/Form.Cadastro.Gestor";

// Componente principal para a página de cadastro de gestores
export default function CadastrarGestor() {

    // Renderiza a interface de cadastro de gestores
    return (
        <div className="app">
            {/* Título da página */}
            <h1>CADASTRAR GESTOR</h1>

            {/* Componente de formulário para cadastrar gestores */}
            <FormCadastroGestores />
        </div>
    );
}
