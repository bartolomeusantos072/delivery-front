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
    product:ProductInterface,
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>,
    descriptionValue: string,
}
export interface valueContextType {
    categoriaId: number,
    setCategoriaId: React.Dispatch < React.SetStateAction < number >>
    view: boolean,
    setView: React.Dispatch < React.SetStateAction < boolean >>, 
    descriptionValue: string,
    setDescriptionValue: React.Dispatch < React.SetStateAction < string >>,
    cartItems: CartItemInterface[]
    setCartItems:React.Dispatch < React.SetStateAction < CartItemInterface[] >> | void,
}