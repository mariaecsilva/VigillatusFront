import React from "react";

import FormLoginGestores from "../../components/Form.Gestor/Form.Login.Gestor";

// Componente principal para a página de login dos gestores
export default function LoginGestor() {

    // Renderiza a interface de login de gestores
    return (
        <div className="app">
            {/* Título da página */}
            <h1>LOGIN GESTOR</h1>

            {/* Componente de formulário para o login de gestores */}
            <FormLoginGestores />
        </div>
    );
}