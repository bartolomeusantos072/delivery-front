import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import formatCurrency from "../utils/formatCurrency";
import { ProductInterface } from "../utils/Intefaces";



export default function Product({product}:{product: ProductInterface}) {
    
    const {categoria_id,id, nome, descricao, valor,imagem} = product; 

    return <Link className="link-offset-2 link-underline m-4 link-underline-opacity-0 "  to={{
        pathname: `/product-details/${categoria_id}-${id}`
      }}>
    
    <div key={id} className="card d-flex flex-row align-items-center" style={{width: '18rem', height: '200px'}}>

    <div className="card-body">
    <div>    
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">{descricao}</p>
    <div>
        <h4 className="text-primary"> {formatCurrency(Number(valor))}</h4>
    </div>
    </div>    
    </div>
    <Image className="bg-cover m-2 rounded" src={ imagem } alt={nome} width={100} height={100}/>
</div>
</Link>
}