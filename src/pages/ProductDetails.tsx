import {Link, useMatches} from "react-router-dom";
import useProducts from "../hooks/api/useProducts";
import {useEffect, useState} from "react";
import {IoIosArrowBack, IoMdShare} from "react-icons/io";

import Footer from "../components/Footer";
import formatCurrency from "../utils/formatCurrency";
import Description from "../components/Description";
import { ProductInterface } from "../utils/Intefaces";

export default function ProductDetails() {

    const location = useMatches();
    const [count, setCount] = useState(1);
    const [view, setView]=useState(false);
    const [descriptionValue, setDescriptionValue] = useState("");

    const categoria = location[0].params.ids ?. split("-")[0];
    const detail = Number(location[0].params.ids ?. split("-")[1]);
    
    const {products, productsLoading, productsError, getProducts} = useProducts("" + categoria);
     
    useEffect(() => {
        getProducts;
    });

    if (productsLoading) {
        return <p>Loading</p>
    }

    if (productsError) {
        return <p>An error occurred: {
            productsError.message
        }</p>
    }

    const produto: ProductInterface = products.find((product : {
        id: number;
    }) => product.id === Number(detail));
    if (produto) {
        const preco=Number(produto.valor);
        
        return <>
            <div className="d-flex align-items-center justify-content-around">
                <div className="d-flex justify-content-between p-3">

                    <Link to="/"><IoIosArrowBack/></Link>
                    <h5>
                        Detalhes do Produto
                    </h5>

                </div>
                <div className="p-3">
                    <IoMdShare/>
                </div>
            </div>
            <hr/>
            <h4>{
                produto.nome
            }</h4>
            <h4 className="text-primary"> {
                formatCurrency(preco)
            }</h4>
            <p className="fs-5 ">
                {
                produto.descricao
            }</p>
            <Description 
            view={view} 
            setView={setView} 
            placeholder={ produto.descricao.split(" ")[0]}
            descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />
            <Footer preco={preco} produto={produto} count={count} setCount={setCount} descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />            
        </>
    }
    return null;

}
