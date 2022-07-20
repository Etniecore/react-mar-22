import {useDispatch, useSelector} from "react-redux";

export default function UserPage(){

    let {users, user}= useSelector(state=>state);

    let dispatch= useDispatch();


    return(
        <div>
            {user?.email}
            {users.map((item,index)=>
                <div key={index}>
                    <p> {item.id} </p>
                    <p> {item.name} </p>
                    <button onClick={()=>{
                        dispatch({type:'one_user', payload: item.id})

                    }}> Get Email </button>
                </div>
            )}

        </div>
    )
}