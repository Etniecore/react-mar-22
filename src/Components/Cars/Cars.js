import {useDispatch, useSelector} from "react-redux";
import {Car} from "../index";
import {useEffect} from "react";
import {carActions} from "../../Redux/carSlice/carSlice";

export default function Cars() {

    const{cars}=useSelector(state=>state.carReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])


    return (
        <div>
            {cars.map(car => <Car
                key={car.id}
                car={car}/>)}
        </div>
    )
}