import axios from 'axios';

 // ID da empresa que você deseja obter informações

const apiUrl = `${import.meta.env.VITE_API_BASE_URL}`;
const instance = axios.create({
  baseURL: apiUrl
});

export default instance;