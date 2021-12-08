import { useNavigate } from 'react-router';
import { useContext } from 'react';

import {AuthContext} from '../../contexts/AuthContext.js'
import albumService from '../../services/albumService.js'
import styles from './Add.module.css'

export default function Add(){

    const {user} = useContext(AuthContext);
    let navigate  = useNavigate();


    function onAlbumCreate(e){

        e.preventDefault()

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
        
        
        albumService.create({

            name,
            composerArtist,
            date,
            numberOfSongs,
            genre,
            tracklist,
            description,
            personnel,
            imageURL,

        }, user.accessToken)
        .then(() => {

            navigate('/catalog')

        })

    }


    return(

        <div className="contact-page">
            <div className="contactbg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contacttitlepage">
                                <h2>Add An Album</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className=" col-md-6 offset-md-3">
                        <div className="address">

                            <form onSubmit={onAlbumCreate} method="POST">
                                <div className="row">
                                    <h1>General Info:</h1>
                                    <h4>Album Name: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Name" type="text" name="name" />
                                    </div>
                                    <h4>Composer/Artist: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Name" type="text" name="composer-artist" />
                                    </div>
                                    <h4>Date of Release: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Date of release" type="date" name="date" />
                                    </div>
                                    <h4>Number of Tracks: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" placeholder="№" name="number-of-songs" />
                                    </div>
                                    <h4>Genre: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="..." type="text" name="genre" />
                                    </div>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist} placeholder="..." type="text" name="tracklist" />
                                    </div>
                                    
                                    <h1>Additional Info:</h1>

                                    <h4>Description: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} placeholder="..." type="text" name="description" />
                                    </div>
                                    <h4>Personnel: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} placeholder="..." type="text" name="personnel" />
                                    </div>
                                    <h4>Album Art: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="imageURL" type="text" name="imageURL" />
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="send">Add the album</button>
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