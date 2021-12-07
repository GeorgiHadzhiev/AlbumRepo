import { useNavigate } from 'react-router';
import { useContext,useState } from 'react';

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
        let data = formData.get('data')
        let numberOfSongs = formData.get('number-of-songs')
        let tracklist = formData.get('tracklist')
        let description = formData.get('description')
        let composerArtist = formData.get('composer-artist')
        let imageURL = formData.get('imageURL')

        albumService.create({

            name,
            data,
            numberOfSongs,
            tracklist,
            description,
            composerArtist,
            imageURL,

        },user.accessToken)
        .then(res => {

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

                            <form onSubmit={onAlbumCreate}>
                                <div className="row">
                                    <h1>General Info:</h1>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Name" type="text" name="name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="date" name="data" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" placeholder="Number of tracks" name="number-of-songs" />
                                    </div>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist} placeholder="Tracklist" type="text" name="tracklist" />
                                    </div>
                                    
                                    <h1>Additional Info:</h1>

                                    <div className="col-sm-12">
                                        <textarea className={styles.description} placeholder="Description" type="text" name="description" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Composer/Artist" type="text" name="composer-artist" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Album Art" type="text" name="imageURL" />
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