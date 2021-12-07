import { useParams } from 'react-router-dom';

import styles from './Edit.module.css'
import albumService from '../../services/albumService.js'
import useAlbumState from '../../hooks/useAlbumState.js';

export default function Edit(){

    const {albumId} = useParams()
    const [album,setAlbum] = useAlbumState(albumId);

    function petEditSubmitHandler(e){

        e.preventDefault();


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

                            <form method="POST">
                                <div className="row" onSubmit={petEditSubmitHandler}>
                                    <h1>General Info:</h1>
                                    <div className="col-sm-12">
                                        <input className="contactus" defaultValue={album.name} type="text" name="name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="date" name="date" defaultValue={album.date} />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" type="number" defaultValue={album.numberOfSongs} name="number-of-songs" />
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
                                        <input className="contactus" defaultValue={album.composerArtist} type="text" name="composer-artist" />
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