export default function User({user, chosenUser}){
    return(
        <div>
            <h2>ID: {user.id}</h2>
            <h3>Name: {user.name}</h3>
            <button onClick={()=>{
                chosenUser(user)
            }}> More details </button>
        </div>
    )
}