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
        .catch(err =>{

            console.log(err[1])

        })


    },[])

    return(

        <section id="catalog-page">
            <h1>All Albums</h1>
            {albums.length > 0
            
                ?(
                    <ul>

                        {albums.map(x => <AlbumCard key={x._id} album={x} />)}

                    </ul>
                )
                : <p className="no-albums">Sorry, no albums found :(</p>
            
            }


        
        </section>
    )


}