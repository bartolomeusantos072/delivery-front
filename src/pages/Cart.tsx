import {useContext} from "react";
import {AppContext} from "../context/AppContext";
import DeletAll from "../components/DeletAll";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {CartItemInterface} from "../utils/Intefaces";
import CartItem from "../components/CartItem";


export default function Cart() {
        
    const {cartItems} : {
        cartItems: CartItemInterface[]
    } = useContext(AppContext);

    const url =cartItems.length >0 ? `/categorias/${cartItems[cartItems.length-1].product.categoria_id}/products`: "/";
    console.log(cartItems);

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
            cartItems.map((item : CartItemInterface) => {
                return <CartItem key={
                        item.product.id
                    }
                    item={item}/>
            })
        }
            
               
                    <div className="card ">
                        <div className="card-body">
                            {
                              cartItems.length >0 ?
                              <button type="button" className="btn btn-primary btn-block btn-lg w-100">Fechar Pedido</button>
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
