export default function TodosComponent({item:{id,title, completed}}){
    return(
        <div>
           <div> ID: {id}</div>
           <div> Title: {title}</div>
           <div> Status: {completed.toString()}</div>
        </div>
    )
}