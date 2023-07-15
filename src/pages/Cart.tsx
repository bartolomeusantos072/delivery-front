import {useContext} from "react";
import {AppContext} from "../context/AppContext";
import DeletAll from "../components/DeletAll";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CartItemInterface } from "../utils/Intefaces";
import CartItem from "../components/CartItem";


export default function Cart() {
    const {cartItems} = useContext(AppContext);

    return (
        <section className="h-100 gradient-custom">
            <div className="d-flex align-items-center justify-content-around">
                <div className="d-flex flex-row align-items-center justify-content-between p-3">

                <Link to="/" className="fs-3"><IoIosArrowBack/></Link>

                    <span>
                        Carrinhos de Compras
                    </span>

                </div>

                <DeletAll />Limpar
                
            </div>
            <hr/>
            {
              cartItems.map((item : CartItemInterface) => {
                return <CartItem key={item.product.id} item={item}/>
              })
            }
      </section>
    )
}
