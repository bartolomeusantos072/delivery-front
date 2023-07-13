import {IoIosAdd, IoIosRemove} from "react-icons/io";

export default function AddItems({count, setCount} : {
    count : number,
    setCount : React.Dispatch < React.SetStateAction < number >>
}) {


    return <div className="d-flex align-items-center w-30">
        <button type="button"
            className={
                count > 0 ? `btn btn-link` : `d-none`
            }
            onClick={
                () => setCount(count - 1)
        }>
            <h4>
                <IoIosRemove/>
            </h4>
        </button>
        <h5> {count}</h5>
        <button type="button" className="btn btn-link"
            onClick={
                () => setCount(count + 1)
        }>
            <h4>
                <IoIosAdd/>
            </h4>
        </button>
    </div>
}
