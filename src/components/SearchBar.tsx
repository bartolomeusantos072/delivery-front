import {useState} from 'react';
import {ProductInterface} from "../utils/Intefaces";

function SearchBar({products, setProduct}:{products: ProductInterface[], setProduct: (product: ProductInterface | null) => void }) {

    
   
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event : {
        preventDefault: () => void;
    }) => {
        event.preventDefault();
       

        if (searchValue.trim() === '') {
            setProduct(null);
          } else {
            const productSearch = products.filter((product) => {
              return (
                product.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
                product.descricao.toLowerCase().includes(searchValue.toLowerCase())
              );
            });
            setProduct(productSearch[0]);
          }
    };

    return (
        <form className="" onSubmit={handleSearch}>
            <input 
                type="search"
                value={searchValue}
                placeholder="O que você quer comer hoje?"
                className="border-0 focus-ring focus-ring-light"
                onChange={
                    ({target}) => setSearchValue(target.value)
                }
                />

        </form>
    );
}

export default SearchBar;
