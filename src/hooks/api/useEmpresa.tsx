import useAsync from '../useAsync.jsx';

import * as empresaApi from "../../services/empresaApi";

export default function useEmpresa(){
    const {
        data: empresa,
        loading: empresaLoading,
        error: empresaError,
        act: getEmpresa
    } = useAsync(() => empresaApi.getEmpresaInfo());

    return  {
        empresa, empresaLoading, empresaError, getEmpresa
    }
}