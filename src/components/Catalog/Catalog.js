import { useState,useEffect } from "react"

import AlbumCard from "./AlbumCard"
import albumService from "../../services/albumService.js"

export default function Catalog(){

    const [albums,setAlbums] = useState([]);

    useEffect(() => {

        albumService.getAll()
        .then(res => {

            setAlbums(res)

        })

    },[])

    return(

        <section id="catalog-page">
            <h1>All Albums</h1>
            <ul>

                {albums.map(x => <AlbumCard key={x._id} album={x} />)}

            </ul>


        
        </section>
    )


}