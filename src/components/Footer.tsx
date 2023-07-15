import {useState} from "react";

import AddToCart from "./Modal/AddToCart";
import AddItems from "./AddItems";
import { PreAddToCartInterface } from "../utils/Intefaces";
import formatCurrency from "../utils/formatCurrency";



export default function Footer({ product, count, setCount }: PreAddToCartInterface) {
    
    const resultado = (Number(product.valor))*count;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    return (
        
        <footer className="w-100 d-flex justify-content-between">
            <AddItems count={count} setCount={setCount}/>
            <button className="d-flex justify-content-between btn btn-primary btn-lg w-100" type="button" onClick={handleShow} >
                <h5>Adicionar</h5>
                <h5>
                {formatCurrency(resultado)}
                </h5>
            </button>
            
            <AddToCart show={show} handleClose={handleClose} product={product} count={count} setCount={setCount} />
            </footer>
    
    );


}
