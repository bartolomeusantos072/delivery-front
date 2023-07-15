import { useState } from "react";
import { IoMdShare } from "react-icons/io";
import ErrorPage from "../pages/ErroPage";
import { ProductInterface } from "../utils/Intefaces";

export default function Shared({product}: {product: ProductInterface}) {
    
    const [shareSuccess, setShareSuccess] = useState(false);
    const {
        categoria,
        nome,
        imagem,
        descricao,
        valor
    } = product;
    const shareProduct = () => {
        navigator.share({
            title: `${categoria}`,
            text: `${nome} ${imagem}${descricao}${valor}`,
            url: window.location.href
        }).then(function() {
            setShareSuccess(true);
          })
          .catch(function() {
            <ErrorPage/>
          });
    }
    return <div>
    <button className="btn btn-outline fs-3 p-3 border border-0" onClick={shareProduct}>
      <IoMdShare />
    </button>
    {shareSuccess && <h2>Compartilhado com sucesso</h2>}
  </div>
}
