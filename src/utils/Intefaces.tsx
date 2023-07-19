export interface ProductInterface {
    categoria:string;
    categoria_id:number;
    descricao:string;
    id:number;
    imagem:string;
    nome:string;
    valor:string;
}

export interface PreAddToCartInterface{
    product:ProductInterface,
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>,
}

export interface AddToCartInterface{
    show : boolean,
    handleClose : () => void,
    product : ProductInterface,
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>
}
export interface CartItemInterface{
    id:string,
    product:ProductInterface,
    count:number,
    descriptionValue: string,
    [Symbol.iterator](): Iterator<CartItemInterface>;
}
export interface valueContextType {
    count:number,
    setCount:React.Dispatch < React.SetStateAction < number >>,
    categoriaId: number,
    setCategoriaId: React.Dispatch < React.SetStateAction < number >>
    view: boolean,
    setView: React.Dispatch < React.SetStateAction < boolean >>, 
    descriptionValue: string,
    setDescriptionValue: React.Dispatch < React.SetStateAction < string >>,
    cartItems: CartItemInterface[]
    setCartItems:React.Dispatch < React.SetStateAction < CartItemInterface[] >>,
}