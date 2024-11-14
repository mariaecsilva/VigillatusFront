import api from "./api";

class Gestor {
    async getGestor(id) {
        try {
            const response = await api.get(`GestorDados/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar gestor:", error);
            return null;
        }
    }

    loggedGestor(gestor) {
        localStorage.setItem("loggedGestor", JSON.stringify(gestor));
    }

    getLoggedGestor() {
        const gestor = localStorage.getItem("loggedGestor");
        return gestor ? JSON.parse(gestor) : null;
    }

    clearLoggedGestor() {
        localStorage.removeItem("loggedGestor");
    }

    isLoggedIn() {
        return this.getLoggedGestor() !== null;
    }

    setToken(token) {
        localStorage.setItem("authToken", token);
    }

    getToken() {
        const token = localStorage.getItem("authToken")
        return token ? token : null
    }
}

export default Gestor;
