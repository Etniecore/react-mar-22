import {useEffect, useState} from "react";
import {apiService, Form} from "../services";
import {Car} from "../services";

export default function Cars(){
    let [cars,setCars]= useState([]);// useState array for all cars.
    let[car,setCar] = useState(null);// useState form one car which is edited.


    useEffect(()=>
        {
            apiService.getAll()//getting all data from API
            .then(value => setCars(value.data))//adding all retrieved data from API to array cars
        }
    ,[]);


    const addCar = (obj) => setCars([...cars,obj]);// add one car to cars array.

    const deleteCar = async (id)=>{
        await apiService.remove(id); // delete chosen car by ID from API.
        const result = [...cars];//copy cars array
        const index = result.findIndex(item=>item.id===id);//finding index which is equal to chosen car by ID.
        if(index!==-1){ // you can use index===1, it should work same way.
            result.slice(index,1)//removes chosen car by ID from copied array.
            setCars(result);// set filtered array to cars without chosen car by ID.
        }
    }

    const updateCar = async (obj)=> {
        const result = [...cars]; //copies array cars.
        const found =result.find(item=>item.id===car.id)//finding car in array cars with the same id.
        Object.assign(found,obj);// changing old car to an edited one.
        setCars(result);// setting result to array cars;
        setCar(null); // after editing form should be changed back to SAVE
    };



    return(
        <div>

          <div>
              <Form
              addCar={addCar}
              editCar={car}
              updateCar={updateCar}
              />
          </div>


           <div> {
                cars.map((item,index)=>
                    <Car
                        key={index}
                        item={item}
                        deleteCar={deleteCar}
                        setCar={setCar}
                    />
                )
            }
           </div>

        </div>
    )
}