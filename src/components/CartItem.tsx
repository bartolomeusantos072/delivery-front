import { IoMdTrash } from "react-icons/io";
import AddItems from "../components/AddItems";
import { CartItemInterface } from "../utils/Intefaces";
import formatCurrency from "../utils/formatCurrency";

export default function CartItem({item}:{item: CartItemInterface}){
    
    const {id, product, count, descriptionValue} = item;
    const {nome, descricao, valor, imagem, categoria_id} = product;
    
  
  
    return <div className="card rounded-3 mb-4">
    <div className="card-body p-4">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={imagem}
            className="img-fluid rounded-3" alt={nome}/>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <p className="lead fw-normal mb-2">{nome}</p>
          <p>
          <span className="text-muted">Descrição: </span>{descricao}<br/>
          {
            descriptionValue && 
            <><span className="text-muted">Obs: </span>{descriptionValue}</>
          }
          </p>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <AddItems id={id} count={count} />
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 className="mb-0">{formatCurrency(count*Number(valor))}</h5>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-danger"><IoMdTrash/></a>
        </div>
      </div>
    </div>
  </div>
}