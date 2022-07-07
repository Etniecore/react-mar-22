export default function AlbumsComponent({item:{id,title}}){
    return(
        <div>
            <h3>Album</h3>
            <div>ID:{id}</div>
            <div>Title: {title}</div>
            <br/>
        </div>
    )
}