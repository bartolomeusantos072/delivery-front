import useAsync from '../useAsync.js';

import * as productsApi from "../../services/productsApi.tsx";

export default function useProducts(id: string){
    const {
        data: products,
        loading: productsLoading,
        error: productsError,
        act: getProducts
    } = useAsync(() => productsApi.getProductsInfo(id));

    return  {
        products, productsLoading, productsError, getProducts
    }
}