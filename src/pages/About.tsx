import {useEffect} from "react";
import useEmpresa from "../hooks/api/useEmpresa";
import Image from 'react-bootstrap/Image';
import { IoIosArrowForward } from "react-icons/io";
import formatCurrency from "../utils/formatCurrency";

export default function About() {
    const {empresa, empresaLoading, empresaError, getEmpresa} = useEmpresa();


    useEffect(() => {
        getEmpresa;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (empresaLoading) {
        return <p>Loading</p>;
    }

    if (empresaError) {
        return <p>An error occurred: {
            JSON.stringify(empresaError.message)
        }</p>;
    }


    if (empresa) {
        
        const pagamentoArr = empresa.map((e: { forma: string; }) => {
                      return  e.forma
                });
        const set = new Set(pagamentoArr);
        const formaPagamento = [...set];
        return (
            <div className="d-none d-lg-block bg-light fixed-top w-25 h-100" >
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-light d-flex flex-column align-items-center">

                            <figure>
                                
                                <Image  className="border border-primary" width={100} src="https://patioaltiplano.com.br/wp-content/uploads/2018/05/acaie-160x160.png"  alt="Emporio Açai" roundedCircle />
                            </figure>
                            <span className="h5">{
                                    empresa[0].nome
                                }</span>  
                                <figcaption>Pedido mínimo: {formatCurrency(7)}</figcaption>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                                <span className="fw-bold">Endereço</span>
                        </li>
                        <li className="list-group-item bg-light d-flex flex-row"> 
                            <div>
                            { empresa[0].rua }, 
                            {" "+empresa[0].numero }, 
                            {" "+empresa[0].complemento }, 
                            {" "+empresa[0].bairro }, 
                            {" "+empresa[0].cidade }, 
                            {" "+empresa[0].estado }, 
                            {" "+empresa[0].cep } 
                            </div>
                            <div>
                                <a><IoIosArrowForward/></a>
                            </div>
                        </li>
                        <li className="list-group-item list-group-item-dark">
                                <span className="fw-bold">Formas depagamento</span>
                        </li>
                        <li className="list-group-item bg-light"> {
                               formaPagamento.map(e => {
                                return <span className="fw-bold">
                                    {e+""}
                                <br/>
                                </span>
                               })
                            } 
                        </li>
                        <li className="list-group-item list-group-item-dark">
                                <span className="fw-bold">Horário de atendimento</span>
                        </li>
                        <li className="list-group-item bg-light"> {
                                empresa.map((e: { dia_semana: string ; horario_abertura: string ; horario_fechamento: string ; }) => {
                                    return (
                                        <span > {
                                            e.dia_semana
                                        }, {
                                            e.horario_abertura
                                        }, {
                                            e.horario_fechamento
                                        }<br/></span>
                                    );
                                })
                            } 
                        </li>
                    </ul>
            </div>
            );
              }
            
              return null;
            }
