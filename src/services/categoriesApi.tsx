import api from  './api';

export async function getCategoriesInfo() {
    const response = await api.get(`/3/categories`);
    return response.data;
}