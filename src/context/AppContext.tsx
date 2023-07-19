import {createContext, useEffect, useState} from 'react';
import { valueContextType } from '../utils/Intefaces';
import { useCookies } from 'react-cookie';

export const AppContext = createContext();


export const AppProvider = ({children}) => {
  const [categoriaId, setCategoriaId]=useState(0);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [view, setView] = useState(false);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cookies, setCookie] = useCookies(['cartItems']);
  const [formaPagamento,setFormaPagamento]=useState([]);

  useEffect(() => {
    const savedCartItems = cookies.cartItems || [];
    setCartItems(savedCartItems);
  }, []);
  
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);

  useEffect(() => {
    setCookie('cartItems', cartItems,{
      expires: expirationDate,
    });
  }, [cartItems]);

  const updateItemCount = (itemId, newCount) => {
    setCartItems((items) => {
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          if (newCount === 0) {
            return null;
          }
          return { ...item, count: newCount };
        }
        return item;
      });

      return updatedItems.filter((item) => item !== null);
    });
  };

    const value: valueContextType = {
        count,
        setCount,
        categoriaId, setCategoriaId,
        view, setView,
        descriptionValue,
        setDescriptionValue,
        updateItemCount,
        cartItems,
        setCartItems,
        formaPagamento,
        setFormaPagamento
    }
    return <AppContext.Provider value={value}>
        {children} </AppContext.Provider>
};
