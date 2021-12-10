import { useState,useEffect,useContext } from 'react';

import { isAuth } from '../../HOCs/isAuth.js'
import albumService from '../../services/albumService.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import AlbumCard from '../Catalog/AlbumCard'

function MyProfile(){

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
            <h1>All Albums</h1>
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

export default isAuth(MyProfile);