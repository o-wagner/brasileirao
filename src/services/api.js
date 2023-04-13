import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + import.meta.env.VITE_TESTE_KEY
    }
});

const campeonato_id = 10;

export const getCampeonato = async (page) => {
    try {
        const response = await api.get(`campeonatos/${campeonato_id}/${page}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}