import { useState } from "react"
import { motion } from 'framer-motion';

import AlbumCard from "./AlbumCard"
import albumService from "../../services/albumService.js"
import {pageTransition} from '../../constants'
import styles from './Catalog.module.css'

export default function Catalog(){

    const [albums,setAlbums] = useState([]);

    albumService.getAll()
    .then(res => {

        setAlbums(res)

    })
    .catch(err =>{

        console.log(err)

    })


    return(

        <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>

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

        </motion.div>

    )


}