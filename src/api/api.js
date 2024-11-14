// Importa o módulo axios, que é usado para fazer requisições HTTP
import axios from 'axios';

// Cria uma instância do axios com uma configuração padrão
const api = axios.create({
    // Define a URL base para todas as requisições feitas com esta instância do axios
    baseURL: 'http://localhost:5000'
})

// Exporta a instância criada para que possa ser usada em outros arquivos
export default api;