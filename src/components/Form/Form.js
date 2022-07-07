import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {apiService} from "../services";

export default function Form({addCar,editCar,updateCar}) {

    let {register, handleSubmit, reset, setValue, formState: {errors}} = useForm();//register for forms.

    useEffect(()=>{//sets values in form when you click on edit button.
        if(editCar){
            setValue('model', editCar.model)
            setValue('price', editCar.price)
            setValue('year', editCar.year)
        }
    }, [editCar])//when editCar is changing, it will start re-rendering of the page.


    const submit = async (obj) => {
        if(!editCar) {//if there is not edit car, then we post/save car to array cars
            const {data} = await apiService.save(obj)// when you click SAVE, it posts the object on API
            addCar(data); // ,then it`s sends it to array cars
        }else{
             const {data} = await apiService.edit(editCar.id, obj);
             updateCar(data);
        }
        reset();
    }
        return (
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type={"text"} placeholder={'model'}
                           {...register('model', {
                        required: true,
                        pattern: new RegExp(/^[a-zA-ZА-яіІїЇҐґёЁєЄ]{1,20}$/)
                    })}/>
                    <input type={"number"} placeholder={'price'}
                           {...register('price', {
                        required: true,
                        valueAsNumber: true,
                        min: 0,
                        max: 1000000
                    })}/>
                    <input type={"number"} placeholder={'year'}
                           {...register('year', {
                        required: true,
                        valueAsNumber: true,
                        min: 1990,
                        max: new Date().getFullYear()
                    })}/>
                    <button>{editCar? 'Edit':'Save'}</button>
                </form>
                <div>
                    {errors.model && <span>Only Alpha min 1 max 20 ch</span>}
                    {errors.price && <span>Min 0 Max 1 000 000</span>}
                    {errors.year && <span>Min 1990 Max current year</span>}
                </div>
            </div>
        )
}