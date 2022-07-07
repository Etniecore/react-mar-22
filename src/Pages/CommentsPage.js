import {useEffect,useState} from "react";
import {Outlet} from "react-router-dom";

import {apiService} from "../Services/api.services";
import {CommentsComponent} from "../Services";


export default function CommentsPage(){

    const [comments,setComments] = useState([]);

    useEffect(()=>{
        apiService.comments().then(response=>response.json())
            .then(data=>setComments(data));
    },[]);

    return(
        <div>

            <Outlet/>
            {
                comments.map(item => <CommentsComponent
                    key={item.id}
                    item={item}/>)
            }
        </div>

    )
}