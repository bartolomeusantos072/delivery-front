/* eslint-disable @typescript-eslint/no-explicit-any */
import {Link, useParams} from "react-router-dom";
import useProducts from "../hooks/api/useProducts";
import {useEffect, useState} from "react";
import Product from "../components/Product";
import {IoIosArrowBack, IoIosSearch} from "react-icons/io";
import {ProductInterface} from "../utils/Intefaces";
import SearchBar from "./components/SearchBar";


export default function Products() {
    const {id} = useParams();
    const {products, productsLoading, productsError, getProducts} = useProducts("" + id);
    const [product, setProduct]=useState<ProductInterface|null>();
    const [view, setView] = useState(false);

    useEffect(() => {
        getProducts;
    },[]);
    
    const handleSearchClick = () => {
        setView(!view)
    }

    if (productsLoading) {
        return <p>Loading</p>
    }

    if (productsError) {
        return <p>An error occurred: {
            productsError.message
        }</p>
    }

    
    if (products) {

        return (
            <>
                <main>

                    <div className="d-flex align-items-center justify-content-around ">
                        <div className="d-flex justify-content-between p-3">

                            <Link to="/"><IoIosArrowBack/></Link>
                            <span>{
                                products[0].categoria
                            }</span>

                        </div>
                        <div className="p-3">
                            {
                            view ? <div className="border rounded d-flex align-items-center">
                                <IoIosSearch onClick={handleSearchClick}/>
                                <SearchBar products={products} setProduct={setProduct}/></div> : 
                            <IoIosSearch onClick={handleSearchClick}/>
                        } </div>
                    </div>
                    <hr/>
                    <h6>{
                        products[0].categoria
                    }</h6>
                    <div className="d-flex flex-wrap">
                        
                        {
                            product ?  <Product product={product}/>:
                            products.map((product : ProductInterface) => {
                            return <Product product={product}/>
                        })
                    } </div>
                </main>
            </>

        )
    }
    return null;
}
