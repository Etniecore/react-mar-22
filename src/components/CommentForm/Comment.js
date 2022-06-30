import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {getPosts,postComment} from "../../services";

export default function Comment(){
    let {register,handleSubmit}= useForm();
    let [posts,setPosts]= useState([]);

    useEffect(()=>{
       getPosts().then(result=>setPosts([...result]))
    },[]);

    const submit = (obj)=> postComment(obj)

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}> Select Post ID:

                <select {...register('PostID')}>
                    {
                        posts.map((post,index) => <option key={index} value={post.id}>{post.id}</option>)
                    }
                </select>

                <input type='text' placeholder={'Leave your comment'} {...register('body')}/>

                <button> Confirm</button>
            </form>
        </div>
    )
}