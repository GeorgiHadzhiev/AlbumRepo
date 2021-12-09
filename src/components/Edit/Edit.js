import { useState,useContext } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import styles from './Edit.module.css'
import albumService from '../../services/albumService.js'
import useAlbumState from '../../hooks/useAlbumState.js';
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Edit(){

    const {albumId} = useParams();
    const {user} = useContext(AuthContext);
    const [errors,setErrors] = useState({name: null});
    const [album] = useAlbumState(albumId);
    const navigate = useNavigate()

    function albumEditSubmitHandler(e){

        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name')
        let date = formData.get('date')
        let numberOfSongs = formData.get('number-of-songs')
        let tracklist = formData.get('tracklist')
        let description = formData.get('description')
        let composerArtist = formData.get('composer-artist')
        let imageURL = formData.get('imageURL')

        albumService.update(albumId,{

            name,
            date,
            numberOfSongs,
            tracklist,
            description,
            composerArtist,
            imageURL


        },user.accessToken)
        .then(res =>{

            navigate(`/details/${albumId}`)

        })
        


    }

    function nameChangeHandler(e){

        let currentName = e.target.value

        if(currentName.length <= 0 ){

            setErrors(state =>({...state, name: 'Name cannot be blank'}))

        }
        else{

            setErrors(state => ({...state,name: null}))

        }

    }

    return(

        <div className="contact-page">
            <div className="contactbg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contacttitlepage">
                                <h2>Edit the Album Details</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className=" col-md-6 offset-md-3">
                        <div className="address">

                            <form method="PUT" onSubmit={albumEditSubmitHandler}>
                                <div className="row" >
                                    <h1>General Info:</h1>

                                    <div className="col-sm-12" >
                                        <input className="contactus" style={{borderColor: errors.name ? 'red' : 'green'}} defaultValue={album.name} type="text" name="name" onBlur={nameChangeHandler} />
                                    </div>
                                    <span className={styles.error}>{errors.name}</span>
                                    <div className="col-sm-12">
                                        <input className="contactus" defaultValue={album.composerArtist} type="text" name="composer-artist" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" name="date" defaultValue={album.date} />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" defaultValue={album.numberOfSongs} name="number-of-songs" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="..." type="text" name="genre" />
                                    </div>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist} defaultValue={album.tracklist} type="text" name="tracklist" />
                                    </div>
                                    
                                    <h1>Additional Info:</h1>

                                    <div className="col-sm-12">
                                        <textarea className={styles.description} defaultValue={album.description} type="text" name="description" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" defaultValue={album.imageURL} type="text" name="imageURL" />
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="send">Edit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}