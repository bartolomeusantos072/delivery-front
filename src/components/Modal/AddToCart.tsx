import Modal from 'react-bootstrap/Modal';
import AddItems from '../AddItems';
import Description from '../Description';
import { AddToCartInterface, CartItemInterface } from '../../utils/Intefaces';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';



export default function AddToCart({show, handleClose, product, count, setCount} : AddToCartInterface) {
    const {categoriaId, setCartItems, descriptionValue, setDescriptionValue} = useContext(AppContext);
    
    const history = useNavigate();
    const handleAddCart = () => {
        const newItem: CartItemInterface ={id:crypto.randomUUID(),product, count, descriptionValue};
        setCartItems((items: CartItemInterface) => [...items, newItem]);
        setDescriptionValue("");
        handleClose();
        history(`/categorias/${categoriaId}/products`);
    }

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header className='d-flex flex-column'>
                <img width={171} height={180}
                     src="https://img.freepik.com/vetores-premium/desenho-plano-desenhado-a-mao-de-pessoas-a-saltar_23-2149081365.jpg" alt="adicionar ao carrinho"/>
                <Modal.Title>{product.nome} adicionado ao carrinho!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-row justify-content-between align-items-center">
                <h6>Quantidade</h6>
                <AddItems count={count} setCount={setCount}/>
            </Modal.Body>
            <hr/>
            <Modal.Body>
                <Description  placeholder={product.descricao} />
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column ">
                <button type="button" className="btn btn-outline-primary btn-lg btn-block w-100" onClick={handleAddCart}>
                    Continuar comprando
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-block w-100" onClick={handleClose}>
                    Finalizar Pedido
                </button>
            </Modal.Footer>
        </Modal>
    )
}
