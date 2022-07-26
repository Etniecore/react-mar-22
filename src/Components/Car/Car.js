import css from './car.module.css';
import {useDispatch} from "react-redux";
import {carActions} from "../../Redux/carSlice/carSlice";

export default function Car({car}){
    const {id,model,price,year} = car;

    const dispatch = useDispatch();

    return(
        <div className={css.Car}>
            <div>ID:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
          <button className={css.btn}
          onClick={()=>dispatch(carActions.setCar(car))}>Update</button>
          <button className={css.btn}
          onClick={()=>dispatch(carActions.deleteById({id:id}))}>Delete</button>
</div>
    )
}