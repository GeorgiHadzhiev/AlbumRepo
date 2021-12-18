import { useState,useEffect,useContext } from 'react';
import { motion } from 'framer-motion';

import { routeGuardIfNotUser } from '../../HOCs/routeGuard.js'
import albumService from '../../services/albumService.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import {pageTransition} from '../../constants'
import AlbumCard from '../Catalog/AlbumCard'
import styles from './MyAlbum.module.css'

function MyAlbums(){

    const {user} = useContext(AuthContext);
    const [albums,setAlbums] = useState([]);

    useEffect(() => {

        albumService.getAllOwn(user.accessToken)
        .then(res => {

            setAlbums(res)

        })
        .catch(err =>{

            console.log(err)

        })


    },[user.accessToken])

    
    return(
        
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} >

            <section id="myProfilePage">
                <h1>My Albums</h1>
                {albums.length > 0
                
                    ?(
                        <ul className={styles.myAlbums}>

                            {albums.map(x => <AlbumCard key={x._id} album={x} />)}

                        </ul>
                    )
                    : <p className="no-albums">Sorry, you've added no albums yet ☹️</p>
                
                }


            
            </section>

        </motion.div>
        
    )
        
}

export default routeGuardIfNotUser(MyAlbums);