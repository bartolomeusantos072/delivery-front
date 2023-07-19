import { useContext, useState } from "react";
import {Form, Modal} from "react-bootstrap";
import { AppContext } from "../../context/AppContext";

export default function ProceedPay({show, handleClose} : {
    show : boolean,
    handleClose : boolean
}) {
    const {formaPagamento}=useContext(AppContext);
    const [selectedPayment, setSelectedPayment] = useState("");

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
      };
    const message = "Escolher forma de pagamento";
    let content;

    switch (selectedPayment) {
      case "pix":
        content = <PixContent />;
        break;
      case "cartao":
        content = <CartaoContent />;
        break;
      case "dinheiro":
        content = <DinheiroContent />;
        break;
      default:
        content = null;
    }

    return <Modal show={show}
        onHide={handleClose}>
        <Modal.Header className='d-flex flex-column'>
            <img width={171}
                height={180}
                src="https://cdn-apehk.nitrocdn.com/mDhZEmOAwsCRBlKaHhVDXamjQgqKhJTt/assets/images/optimized/rev-f5ea6ff/wp-content/uploads/2020/11/AESS-Icons-Proceed-Pay.png"
                alt={message}/>
            <Modal.Title>{message}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-row justify-content-between align-items-center">
            <Form.Select size="lg" aria-label="Default select example"
            value={selectedPayment}
            onChange={handlePaymentChange}>
                <option>Selecione uma forma de pagamento</option>
                {
                    formaPagamento.map((form)=><option key={form} value={form}>{form}</option>)
                }
            </Form.Select>

        </Modal.Body>
        <hr/>
            <Modal.Footer className="d-flex flex-column ">
            {content}

            </Modal.Footer>
        </Modal>
}
