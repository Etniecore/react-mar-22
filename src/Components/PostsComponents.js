export default function PostsComponents({item:{id,name,email,body,postId}}){
    return(
        <div>
            <h3>Post:</h3>
            <div>PostID: {postId}</div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    )
}