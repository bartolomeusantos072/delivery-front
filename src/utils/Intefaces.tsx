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
    preco:number,
    produto:ProductInterface,
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>,
    descriptionValue:string,
    setDescriptionValue: React.Dispatch<React.SetStateAction<string>>,
}

export interface AddToCartInterface{
    show : boolean,
    handleClose : () => void,
    produto : ProductInterface,
    count:number,
    setCount:React.Dispatch<React.SetStateAction<number>>,
    descriptionValue:string,
    setDescriptionValue: React.Dispatch<React.SetStateAction<string>>,
}