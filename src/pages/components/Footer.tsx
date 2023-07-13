import {useState} from "react";
import formatCurrency from "../../utils/formatCurrency";
import AddToCart from "./Modal/AddToCart";
import AddItems from "./AddItems";
import { PreAddToCartInterface } from "../../utils/Intefaces";


export default function Footer({preco, produto, count, setCount, descriptionValue, setDescriptionValue}: PreAddToCartInterface) {
   
    
    const resultado = (preco)*count;
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
            
            <AddToCart show={show} handleClose={handleClose} produto={produto} count={count} setCount={setCount} descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />
            </footer>
    
    );


}
