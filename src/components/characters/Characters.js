function Characters(props){
    let {id,name,status,species,gender,image} = props;
    return(
        <div>
            <h3>ID: {id}</h3>
            <h2> Name: {name}</h2>
            <p>Status: {status}</p>
            <p> Species: {species}</p>
            <p> Gender: {gender}</p>
            <img src={image} alt=""/>

        </div>
    )
}
export default Characters;