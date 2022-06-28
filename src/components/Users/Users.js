import {getUsers,User} from "../../services";
import {useEffect,useState} from "react";

export default function Users({userId}){

    let [users,setUsers] = useState([]);

    useEffect(()=> {
        getUsers().then(({data}) => setUsers([...data]))
    },[])

    return(
        <div>
            {
                users.map((user,index) => <User
                    item={user}
                    key ={index}
                    userId={userId}
                    />)
            }
        </div>
    )
}