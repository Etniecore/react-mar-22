export default function Ship({mission,year, picture}){
    return(
        <div>
            <h3> Mission name: {mission}</h3>
            <h4> Launch year: {year} </h4>
            <img src={picture} alt=" "/>
        </div>
    )
}