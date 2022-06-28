
export default function Posts({posts}){

   return(
        <div>
            {posts.map((value,index) => <div key={index}>{value.body}</div>)}
        </div>
    )
}