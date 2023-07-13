import {useEffect} from "react";
import useCategories from "../hooks/api/useCategories";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export default function Categories() {
    const {categories, categoriesLoading, categoriesError, getCategories} = useCategories();


    useEffect(() => {
        getCategories;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (categoriesLoading) {
        return <div className="d-flex justify-content-center align-items-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      
    }

    if (categoriesError) {
        return <p>An error occurred: {
            JSON.stringify(categoriesError.message)
        }</p>;
    }


    if (categories) {
        return (
            <div className="d-flex flex-wrap">
                {
                categories.map((categorie : {
                    id: number;
                    Imagem: string;
                    nome: string;
                }) => {
                    return <Link to={`categorias/${categorie.id}/products`}><figure key={categorie.id} className=" figure-img img-fluid rounded m-4" style={{width: '200px', height: '200px'}}>
                        <Image className="bg-cover " src={
                                categorie.Imagem
                            }
                            alt={
                                categorie.nome
                            } width={200} height={200}/>
                        <figcaption className="text-bg-dark fs-5">{
                            categorie.nome
                        }</figcaption>
                    </figure>
                    </Link>
            })
            } </div>
        );
    }
    return null;
}
