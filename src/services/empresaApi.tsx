import api from  './api';

export async function getEmpresaInfo() {
    const response = await api.get(`/3`);
    return response.data;
}