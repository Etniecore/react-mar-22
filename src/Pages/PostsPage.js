import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiService} from "../Services/api.services";
import {PostsComponents} from "../Services";


export default function PostsPage(){
    const params =useParams();
    const {postId} = params;
    const [posts,setPost] = useState([]);

    useEffect(()=>{
        apiService.post(postId)
            .then(response=>response.json())
            .then(data=>setPost([...data]))
    },[postId])

    return(
        <div>
            {posts.map((item, index) =>
                <PostsComponents
                    key={index}
                    item={item}/>)}
        </div>
    )
}