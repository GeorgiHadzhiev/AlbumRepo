import { useState,useEffect } from "react"

import AlbumCard from "./AlbumCard"
import albumService from "../../services/albumService.js"
import styles from './Catalog.module.css'

export default function Catalog(){

    const [albums,setAlbums] = useState([]);

    useEffect(() => {

        albumService.getAll()
        .then(res => {

            setAlbums(res)

        })
        .catch(err =>{

            console.log(err)

        })


    },[])

    return(

        <section id="catalogPage">
            <h1>All Albums</h1>
            <div>

                {albums.length > 0
                
                    ?(
                        <ul className={styles.allAlbums}> 

                            {albums.map(x => <AlbumCard key={x._id} album={x} />)}

                        </ul>
                    )
                    : <p className="no-albums">Sorry, no albums found ☹️</p>
                
                }

            </div>


        
        </section>
    )


}