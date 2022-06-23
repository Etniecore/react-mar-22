import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);  //empty array for all users
    let [user,setUser]=useState({});  //empty object for chosen user

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);    //setter for empty array
            })
    }, [])

    const chosenUser = (user) => setUser(user);  //setter for chosen user(button)

    return (
        <div>

            {user.id && <div>
                <p> {user.email} </p>
                <p> {user.phone} </p>
                <p> {user.website} </p>
            </div>}

            {
                users.map((user, index) =>
                    <User
                        key={index}
                        user={user}//user props
                        chosenUser = {chosenUser}//function for button
                    />
                )
            }
        </div>
    )
}