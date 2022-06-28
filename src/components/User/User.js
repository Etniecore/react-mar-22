export default function User({item,userId}){
    return(
        <div>
           <h3> ID: {item.id}</h3>
            <p> Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <h4> Adress:</h4>
            <p> City:{item.address.city}  </p>
            <p> Street:{item.address.street}</p>
            <button onClick={()=>userId(item.id)}> See posts </button>
        </div>
    )
}