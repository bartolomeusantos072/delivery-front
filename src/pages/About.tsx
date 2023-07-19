import {useContext, useEffect} from "react";
import useEmpresa from "../hooks/api/useEmpresa";
import Image from 'react-bootstrap/Image';
import {IoIosArrowForward} from "react-icons/io";
import formatCurrency from "../utils/formatCurrency";
import {AppContext} from "../context/AppContext";

export default function About() {
    const {empresa, empresaLoading, empresaError, getEmpresa} = useEmpresa();
    const {formaPagamento, setFormaPagamento} = useContext(AppContext);

    useEffect(() => {
        getEmpresa();
        if (empresa) {
            const pagamentoArr = empresa.map((e) => e.forma);
            const set = new Set(pagamentoArr);
            setFormaPagamento([...set]);
          }
    }, [setFormaPagamento]);

    if (empresaLoading) {
        return <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (empresaError) {
        return <p>An error occurred: {
            JSON.stringify(empresaError.message)
        }</p>;
    }

    if (empresa) {
        return (
            <div className="d-none d-lg-block bg-light fixed-top w-25 h-100">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-light d-flex flex-column align-items-center">

                        <figure>

                            <Image className="border border-primary"
                                width={100}
                                src="https://patioaltiplano.com.br/wp-content/uploads/2018/05/acaie-160x160.png"
                                alt="Emporio Açai"
                                roundedCircle/>
                        </figure>
                        <span className="h5">
                            {
                            empresa[0].nome
                        }</span>
                        <figcaption>Pedido mínimo: {
                            formatCurrency(7)
                        }</figcaption>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <span className="fw-bold">Endereço</span>
                    </li>
                    <li className="list-group-item bg-light d-flex flex-row">
                        <div> {
                            empresa[0].rua
                        }, {
                            " " + empresa[0].numero
                        }, {
                            " " + empresa[0].complemento
                        }, {
                            " " + empresa[0].bairro
                        }, {
                            " " + empresa[0].cidade
                        }, {
                            " " + empresa[0].estado
                        }, {
                            " " + empresa[0].cep
                        } </div>
                        <div>
                            <a><IoIosArrowForward/></a>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <span className="fw-bold">Formas depagamento</span>
                    </li>
                    <li className="list-group-item bg-light">
                        {
                        formaPagamento.map((e, index) => {
                            return <span key={index}
                                className="fw-bold">
                                {
                                e + ""
                            }
                                <br/>
                            </span>
                    })
                    } </li>
                    <li className="list-group-item list-group-item-dark">
                        <span className="fw-bold">Horário de atendimento</span>
                    </li>
                    <li className="list-group-item bg-light">
                        {

                        empresa.map((e, index) => {
                            return (
                                <span key={index}>
                                    {
                                    e.dia_semana
                                }, {
                                    e.horario_abertura
                                }, {
                                    e.horario_fechamento
                                }<br/></span>
                            );
                        })
                    } </li>
                </ul>
            </div>
        );
    }

    return null;
}
