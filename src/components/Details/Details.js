import { useParams,useNavigate,Link } from "react-router-dom"
import { useState,useEffect,useContext } from "react";
import {AuthContext} from '../../contexts/AuthContext.js'

import albumService from '../../services/albumService.js'
import ConfirmDialog from '../Common/ConfirmDialog'

export default function Details(){

    let navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const {albumId} = useParams();
    const [album,setAlbum] = useState({}); // default value has to be an empty object as to not read as 'undefined'
    const [showDeleteDialog,setShowDeleteDialog] = useState(false);


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

        })

    }

    function deleteClickHandler(e){

        e.preventDefault();

        setShowDeleteDialog(true)

    }

    return(

        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onDelete={onDeleteHandler} />
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
                                    <button className="button" onClick={deleteClickHandler}>Delete</button>
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

        </>


    )

}