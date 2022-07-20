import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function HomePage(){
    let dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(response=>
                dispatch({type:'get_users', payload: response}))
    },[])

    let state = useSelector(state=>state);


    return(
        <div>
            Home Page
        </div>
    )
}