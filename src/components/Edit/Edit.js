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
        let composerArtist = formData.get('composer-artist')
        let date = formData.get('date')
        let numberOfSongs = formData.get('number-of-songs')
        let genre = formData.get('genre')
        let tracklist = formData.get('tracklist')
        let description = formData.get('description')
        let personnel = formData.get('personnel')
        let imageURL = formData.get('imageURL')

        albumService.update(albumId,{

            name,
            composerArtist,
            date,
            numberOfSongs,
            genre,
            tracklist,
            description,
            personnel,
            imageURL,


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
                            <div className="row">
                                    <h1>General Info:</h1>
                                    <h4>Album Name: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: errors.name ? 'red' : 'green'}} onBlur={nameChangeHandler} defaultValue={album.name} type="text" name="name" />
                                    </div>
                                    <span className={styles.error}>{errors.name}</span>
                                    <h4>Composer/Artist: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Name" type="text" defaultValue={album.composerArtist} name="composer-artist" />
                                    </div>
                                    <h4>Date of Release: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="year" type="number" defaultValue={album.date} name="date" />
                                    </div>
                                    <h4>Number of Tracks: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" placeholder="№" defaultValue={album.numberOfSongs} name="number-of-songs" />
                                    </div>
                                    <h4>Genre: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="..." type="text" defaultValue={album.genre} name="genre" />
                                    </div>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist} placeholder="..." type="text" defaultValue={album.tracklist} name="tracklist" />
                                    </div>
                                    
                                    <h1>Additional Info:</h1>

                                    <h4>Description: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} placeholder="..." type="text" defaultValue={album.description} name="description" />
                                    </div>
                                    <h4>Personnel: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} placeholder="..." type="text" defaultValue={album.personnel} name="personnel" />
                                    </div>
                                    <h4>Album Art: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="imageURL" type="text" defaultValue={album.imageURL} name="imageURL" />
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