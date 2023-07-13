import {AiOutlineHome, AiOutlineBook, AiOutlineShoppingCart} from "react-icons/ai";

export default function Header() {
    return <nav className="position-fixed fixed-top top-0 w-100 navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center ">
            <div className="navbar-brand d-flex fs-1">
                <div className="d-flex align-items-center m-2">
                    <AiOutlineHome/><p className="d-none d-sm-block fs-6 pt-3">Ínicio</p>
                </div>
                <div className="d-flex  align-items-center m-2">
                    <AiOutlineBook />
                    <p className="d-none d-sm-block fs-6 pt-3">Meus Pedidos</p>
                </div>
                <div className="d-flex align-items-center  m-2">
                    <AiOutlineShoppingCart/><p className="d-none d-sm-block fs-6 pt-3">Carrinho</p>
                </div>


            </div>
        </div>
    </nav>
}
