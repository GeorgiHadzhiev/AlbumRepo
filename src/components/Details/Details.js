import { useParams,useNavigate,Link } from "react-router-dom"
import { useContext } from "react";

import {AuthContext} from '../../contexts/AuthContext.js'
import albumService from '../../services/albumService.js'
import useAlbumState from "../../hooks/useAlbumState.js";
import DeletionDialog from '../Common/DeletionDialog'


export default function Details(){
    
    let navigate = useNavigate();
    
    const {user} = useContext(AuthContext);
    const {albumId} = useParams();
    const [album] = useAlbumState(albumId);
    
    function onDeleteHandler(e){
        
        e.preventDefault();

        albumService.deletePost(albumId,user.accessToken)
        .then(() =>{

            navigate('/catalog');

        })

    }


    function likeButtonClick(e){

        let likedUser = user._id
        
        albumService.like(album._id,{likedUser})
        .then(() =>{

            return;

        })
        .catch(err =>{

            console.log(err);

        })

    }

    function dislikeBUttonClick(e){


        let dislikedUser = user._id

        albumService.dislike(album._id,{dislikedUser}, user.accessToken)
        .then(res =>{

            return;

        })
        .catch(err =>{

            console.log(err);

        })

    }

    return(

        <>
            <DeletionDialog className="deleteModal" onDelete={onDeleteHandler} />
            <section id="details-page" className="details">
                <div className="album-information">
                    <h3>Name: {album.name}</h3>
                    <h4>Artist: {album.artist}</h4>
                    <p className="year">Year: {album.date}</p>
                    <p className="img"><img src={album.picture} alt="broken" /></p>
                    <p className="numberOfSongs">Number of tracks: {album.tracks}</p>
                    <p className="genre">Genre: {album.genre}</p>
                    <div className="album-description">
                        <h3>Description:</h3>
                        <p>{album.description}</p>
                    </div>
                    <div className="tracklist">
                        <h3>Tracklist:</h3>
                        <p>{album.tracklist}</p>
                    </div>
                    <div className="personnel">
                        <h3>Personnel:</h3>
                        <p>{album.personnel}</p>
                    </div>


                    <div className="actions">

                        {user._id && (user._id === album._ownerId
                        
                            ?(
                                <>
                                    <Link className="button" to={`/edit/${albumId}`}>Edit</Link>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Delete</button>
                                </>

                            )
                            :(
                                <>
                                    <button onClick={likeButtonClick}>Like</button>
                                    <button onClick={dislikeBUttonClick}>Disslike</button>
                                </>
                            )

                        )}

                        
                    </div>
                </div>
            </section>

        </>


    )

}