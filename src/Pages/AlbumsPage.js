import {useEffect, useState} from "react";
import {apiService} from "../Services/api.services";
import {AlbumsComponent} from "../Services";

export default function AlbumsPage(){

    const[albums, setAlbums]=useState([])

    useEffect(()=>{
        apiService.albums().then(response=>response.json())
            .then(data=>setAlbums(data))
    },[])


    return (
        <div>
            {
                albums.map(item =>
                    <AlbumsComponent
                        key={item.id}
                        item={item}/>)
            }
        </div>
    )
}