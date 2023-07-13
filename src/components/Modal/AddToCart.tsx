import Modal from 'react-bootstrap/Modal';
import AddItems from '../AddItems';
import Description from '../Description';
import { AddToCartInterface } from '../../utils/Intefaces';


export default function AddToCart({show, handleClose, produto, count, setCount, descriptionValue, setDescriptionValue} : AddToCartInterface) {
   
    return (
        <Modal show={show}
            onHide={handleClose} >
            <Modal.Header className='d-flex flex-column'>
                <img width={171}
                    height={180}
                    src="https://img.freepik.com/vetores-premium/desenho-plano-desenhado-a-mao-de-pessoas-a-saltar_23-2149081365.jpg"
                    alt="adicionar ao carrinho"/>
                <Modal.Title>{produto.nome} adicionado ao carrinho!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-row justify-content-between align-items-center">
                <h6>Quantidade</h6>
                <AddItems count={count} setCount={setCount}/>
            </Modal.Body>
            <hr/>
            <Modal.Body>
                <Description view={show} placeholder={produto.descricao} descriptionValue={descriptionValue} setDescriptionValue={setDescriptionValue} />
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column ">
                <button type="button" className="btn btn-outline-primary btn-lg btn-block w-100" onClick={handleClose}>
                    Continuar comprando
                </button>
                <button type="button" className="btn btn-primary btn-lg btn-block w-100" onClick={handleClose}>
                    Finalizar Pedido
                </button>
            </Modal.Footer>
        </Modal>
    )
}
