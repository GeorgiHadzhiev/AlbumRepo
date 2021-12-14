import { useState,useEffect,useContext } from 'react';

import { routeGuardIfNotUser } from '../../HOCs/routeGuard.js'
import albumService from '../../services/albumService.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import AlbumCard from '../Catalog/AlbumCard'

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
        
        <section id="myProfilePage">
            <h1>My Albums</h1>
            {albums.length > 0
            
                ?(
                    <ul>

                        {albums.map(x => <AlbumCard key={x._id} album={x} />)}

                    </ul>
                )
                : <p className="no-albums">Sorry, you've added no albums yet ☹️</p>
            
            }


        
        </section>
        
    )
        
}

export default routeGuardIfNotUser(MyAlbums);