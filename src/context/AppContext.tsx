import {createContext, useState} from 'react';
import { valueContextType } from '../utils/Intefaces';

export const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [categoriaId, setCategoriaId]=useState(0);
    const [descriptionValue, setDescriptionValue] = useState("");
    const [view, setView] = useState(false);
    const [count, setCount] = useState(0);

    const value: valueContextType = {
        count,
        setCount,
        categoriaId, setCategoriaId,
        view, setView,
        descriptionValue,
        setDescriptionValue,
        cartItems,
        setCartItems
    }
    return <AppContext.Provider value={value}>
        {children} </AppContext.Provider>
};
