import {Link, useMatches} from "react-router-dom";
import useProducts from "../hooks/api/useProducts";
import {useEffect, useState} from "react";
import {IoIosArrowBack} from "react-icons/io";

import Footer from "../components/Footer";
import formatCurrency from "../utils/formatCurrency";
import Description from "../components/Description";
import {ProductInterface} from "../utils/Intefaces";
import Shared from "../components/Shared";

export default function ProductDetails() {

    const location = useMatches();
    const [count, setCount] = useState(1);
    const categoria = location[0].params.ids ?. split("-")[0];
    const detail = Number(location[0].params.ids ?. split("-")[1]);

    const {products, productsLoading, productsError, getProducts} = useProducts("" + categoria);

    useEffect(() => {
        getProducts;
    });

    if (productsLoading) {
        return <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (productsError) {
        return <p>An error occurred: {
            productsError.message
        }</p>
    }

    const product: ProductInterface = products.find((product : {
        id: number;
    }) => product.id === Number(detail));
    if (product) {
        
        
        return <>
            <div className="d-flex align-items-center justify-content-around">
                <div className="d-flex flex-row align-items-center justify-content-between p-3">

                    <Link to={`/categorias/${categoria}/products`} className="fs-3"><IoIosArrowBack/></Link>
                    <span>
                        Detalhes do Produto
                    </span>

                </div>
                <Shared product={product}/>
            </div>
            <hr/>
            <h4>{
                product.nome
            }</h4>
            <h4 className="text-primary">
                {
                formatCurrency(Number(product.valor))
            }</h4>
            <p className="fs-5 ">
                {
                product.descricao
            }</p>
            <Description placeholder={ product.descricao.split(" ")[0]} />
            <Footer 
                product={product}
                count={count}
                setCount={setCount}/>
        </>
    }
    return null;

}
