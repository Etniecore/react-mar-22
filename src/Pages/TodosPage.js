import {useEffect, useState} from "react";
import {apiService} from "../Services/api.services";
import {TodosComponent} from "../Services";


export default function TodosPage(){
    let [todos, setTodos] = useState([]);

    useEffect(()=>{
        apiService.todos().then(response=>response.json())
            .then(data=>setTodos([...data]));
    },[])


    return(

        <div>
            {
                todos.map(item=><TodosComponent
                key={item.id}
                item={item}/>)
            }
        </div>
    )
}