export default function PostsComponents({item:{id,name,email,body}}){
    return(
        <div>
            <h3>Post:</h3>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    )
}