import {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";
import DeletAll from "../components/DeletAll";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {CartItemInterface} from "../utils/Intefaces";
import CartItem from "../components/CartItem";
import ProceedPay from "../components/Modal/ProceedPay";


export default function Cart() {
        
    const {cartItems} : {
        cartItems: CartItemInterface[]
    } = useContext(AppContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const url =cartItems.length >0 ? `/categorias/${cartItems[cartItems.length-1].product.categoria_id}/products`: "/";

    return (
        <section className="h-100 gradient-custom">
            <div className="d-flex align-items-center justify-content-around">
                <div className="d-flex flex-row align-items-center justify-content-between p-3">

                <Link to={url} className="fs-3"><IoIosArrowBack/></Link>

                    <span>
                        Carrinhos de Compras
                    </span>

                </div>

                <DeletAll/>Limpar

            </div>
            <hr/> {
            cartItems.map((item : CartItemInterface, index) => {
                return <CartItem key={index}
                    item={item}/>
            })
        }
            
               
                    <div className="card ">
                        <div className="card-body">
                            {
                              cartItems.length >0 ?
                              <>
                              <button type="button" className="btn btn-primary btn-block btn-lg w-100" onClick={handleShow} >Fechar Pedido</button>
                              <ProceedPay show={show} handleClose = {handleClose}/>
                              </>
                              :
                              <>
                              <h4>Seu carrinho esta vazio</h4>
                              <Link  to="/" className="btn btn-primary btn-block btn-lg w-100">Realizar Compras
                              </Link>
                              </>
                            }
                        </div>
                    </div>
        </section>
    )
}
