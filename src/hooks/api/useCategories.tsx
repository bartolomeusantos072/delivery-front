import useAsync from '../useAsync.js';

import * as categoriesApi from "../../services/categoriesApi.js";

export default function useCategories(){
    const {
        data: categories,
        loading: categoriesLoading,
        error: categoriesError,
        act: getCategories
    } = useAsync(() => categoriesApi.getCategoriesInfo());

    return  {
        categories, categoriesLoading, categoriesError, getCategories
    }
}