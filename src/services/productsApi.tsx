import api from  './api';

export async function getProductsInfo(id: string) {
    const response = await api.get(`/3/categories/${id}/products`);
    return response.data;
}