import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
export default function DeletAll(props) {
    
    const [deletItem, setDeletItem] = useState();

    const handleDeletProduct = () => {
    }
    return <button className="btn btn-outline fs-3 p-3 border border-0" onClick={handleDeletProduct}>
    <IoMdTrash/>
    </button>

}
