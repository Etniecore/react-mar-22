import {useDispatch} from "react-redux";
import {countActions} from "../../redux/slices";

export default function Buttons(){

    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(countActions.inc())}>Inc</button>
            <button onClick={()=>dispatch(countActions.dec())}>Dec</button>
            <button onClick={()=>dispatch(countActions.reset())}>Reset</button>
        </div>
    )
}