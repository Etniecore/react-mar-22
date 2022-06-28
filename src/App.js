import {Users,getUserPost, Posts} from "./services";
import './App.css';
import {useState} from "react";

function App() {

    let[posts,setPosts] = useState([]);

    const getUserId=(id)=>
    getUserPost(id).then(({data})=>{
        setPosts([...data])
    })

  return (
    <div >

        <div>
            <Posts
            posts={posts}/>
        </div>

        <div>
            <Users
            userId={getUserId}/>
        </div>

    </div>
  )
}

export default App;
