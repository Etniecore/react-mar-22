import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../Redux/carSlice/carSlice";

export default function Form() {
    const {register,handleSubmit,reset,setValue}= useForm();

    const {updateCar} = useSelector(state => state.carReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(updateCar){
            setValue('model',updateCar.model)
            setValue('price',updateCar.price)
            setValue('year',updateCar.year)
        }

    },[updateCar])


    const submit = async (obj)=> {
        if(updateCar){
            await dispatch(carActions.update({id:updateCar.id, obj}))//send id(state.updateCar.id) of updated car and new car to Async Thunk
        }else{
            await dispatch(carActions.add({obj:obj}));// adds new car to state.cars
        }
        reset();
    };
    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"}
                placeholder={"model"}
                    {...register('model')}/>
                <input type={"text"}
                placeholder={"price"}
                    {...register('price')}/>
                <input type={"text"}
                placeholder={"year"}
                    {...register('year')}/>
                <button>{updateCar?'Update':'Save'}</button>
            </form>




        </div>
    )
}