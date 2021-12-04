import { useParams,useNavigate } from "react-router-dom"
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom"
import {AuthContext} from '../../contexts/AuthContext.js'

import albumService from '../../services/albumService.js'

export default function Details(){

    let navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const {albumId} = useParams();
    const [album,setAlbum] = useState({}); // default value has to be an empty object as to not read as 'undefined'

    useEffect(() => {

        albumService.getOne(albumId)
        .then(res =>{

            setAlbum(res)

        })

    }, [albumId]);

    function onDeleteHandler(e){

        e.preventDefault();

        albumService.deletePost(albumId,user.accessToken)
        .then(() =>{

            navigate('/catalog');

        });

    }

    return(

        <section id="details-page" className="details">
            <div className="album-information">
                <h3>Name: {album.name}</h3>
                <p className="type">Year: {album.year}</p>
                <p className="img"><img src={album.imageURL} alt="broken" /></p>
                <div className="actions">

                    {user._id && (user._id === album._ownerId
                    
                        ?(
                            <>
                                <Link className="button" to="/edit">Edit</Link>
                                <button className="button" onClick={onDeleteHandler}>Delete</button>
                            </>

                        )
                        :(
                            <>
                                <button>Like</button>
                                <button>Disslike</button>
                            </>
                        )

                    )}

                    
                </div>
            </div>
            <div className="album-description">
                <h3>Description:</h3>
                <p>{album.description}</p>
            </div>
        </section>

    )

}