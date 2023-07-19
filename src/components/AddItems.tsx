import {IoIosAdd, IoIosRemove} from "react-icons/io";
import {useContext} from "react";
import {AppContext} from "../context/AppContext";

export default function AddItems({id, count, setCount} : {
    id? : string,
    count : number,
    setCount? : React.Dispatch < React.SetStateAction < number >>
}) {
    const {cartItems, setCartItems,updateItemCount} = useContext(AppContext);

    

    const handleDecrement = () => {
        if (id) {
            updateItemCount(id, count - 1);
        } else {
            setCount && setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        if (id) {
            updateItemCount(id, count + 1);
        } else {
            setCount && setCount(count + 1);
        }
    };

    return <div className="d-flex align-items-center w-30">
        <button type="button"
            className={
                count > 0 ? `btn btn-link` : `d-none`
            }
            onClick={handleDecrement}>
            <h4>
                <IoIosRemove/>
            </h4>
        </button>
        <h5> {count}</h5>
        <button type="button" className="btn btn-link"
            onClick={handleIncrement}>
            <h4>
                <IoIosAdd  />
            </h4>
        </button>
    </div>
}
