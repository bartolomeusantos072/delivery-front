import {AiOutlineHome, AiOutlineBook, AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
    return <nav className="position-fixed fixed-top top-0 w-100 navbar navbar-light bg-light">
        <div className="container-fluid justify-content-center ">
            <div className="navbar-brand d-flex fs-1">
                <Link to="/" className="d-flex align-items-center m-2 link-secondary link-underline-light link-offset-2 link-underline link-underline-opacity-0">
                    <AiOutlineHome/><p className="d-none d-sm-block fs-6 pt-3">Ínicio</p>
                </Link>
                <Link to="/" className="d-flex align-items-center m-2 link-secondary link-underline-light link-offset-2 link-underline link-underline-opacity-0">
                    <AiOutlineBook />
                    <p className="d-none d-sm-block fs-6 pt-3">Meus Pedidos</p>
                </Link>
                <Link to="/" className="d-flex align-items-center m-2 link-secondary link-underline-light link-offset-2 link-underline link-underline-opacity-0">
                    <AiOutlineShoppingCart/><p className="d-none d-sm-block fs-6 pt-3">Carrinho</p>
                </Link>


            </div>
        </div>
    </nav>
}
