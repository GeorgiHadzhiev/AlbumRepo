import { useState,useContext } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import styles from './Edit.module.css'
import albumService from '../../services/albumService.js'
import useAlbumState from '../../hooks/useAlbumState.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { routeGuardEdit } from '../../HOCs/routeGuard.js'


function Edit(){

    const {albumId} = useParams();
    const {user} = useContext(AuthContext);
    const [formErrors,setFormErrors] = useState({});
    const [album] = useAlbumState(albumId);
    const navigate = useNavigate();

    function albumEditSubmitHandler(e){
        
        e.preventDefault();

        if(Object.values(formErrors).some(x => x !== null)){

            let invalidFiled = Object.entries(formErrors).filter(x => x[1] !== null)[0]
            let invalidEl = document.getElementsByName(invalidFiled[0])[0]

            return invalidEl.scrollIntoView(invalidEl)

        }
    
        let formData = new FormData(e.currentTarget);
        let albumData = Object.fromEntries(new FormData(e.currentTarget))

        let name = formData.get('name')
        let composerArtist = formData.get('artist')
        let date = formData.get('date')
        let numberOfSongs = formData.get('tracks')
        let genre = formData.get('genre')
        let tracklist = formData.get('tracklist')
        let description = formData.get('description')
        let personnel = formData.get('personnel')
        let imageURL = formData.get('picture')


        albumService.update(albumId,albumData)
        .then(() =>{

            navigate(`/details/${albumId}`)

        })
        
    }



    function formErrorHanlder(e){
    
        let formValue = e.target.value;
        let formName = e.target.name

     
        if(formValue.length <= 0){

            setFormErrors(formErrors => ({...formErrors, [formName]: `${formName} cannot be blank`}))

        }
        else{

            setFormErrors(formErrors => ({...formErrors, [formName]: null}))

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
                                        <input className="contactus" style={{borderColor: formErrors.name ? 'red' : 'green'}} onBlur={formErrorHanlder} defaultValue={album.name} placeholder="Name" type="text" name="name" />
                                    </div>
                                    <span className={styles.error}>{formErrors.name}</span>

                                    <h4>Composer/Artist: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.artist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="Name" type="text" defaultValue={album.composerArtist} name="artist" />
                                    </div>
                                    <span className={styles.error}>{formErrors.artist}</span>

                                    <h4>Date of Release: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.date ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="year" type="number" defaultValue={album.date} name="date" />
                                    </div>
                                    <span className={styles.error}>{formErrors.date}</span>

                                    <h4>Number of Tracks: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.tracks ? 'red' : 'green'}}  onBlur={formErrorHanlder} type="number" placeholder="№" defaultValue={album.numberOfSongs} name="tracks" />
                                    </div>
                                    <span className={styles.error}>{formErrors.tracks}</span>
                                    
                                    <h4>Genre: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus"  style={{borderColor: formErrors.genre ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text" defaultValue={album.genre} name="genre" />
                                    </div>
                                    <span className={styles.error}>{formErrors.genre}</span>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist}  style={{borderColor: formErrors.tracklist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text" defaultValue={album.tracklist} name="tracklist" />
                                    </div>
                                    <span className={styles.error}>{formErrors.tracklist}</span>
                                    
                                    <h1>Additional Info:</h1>

                                    <h4>Description: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} style={{borderColor: formErrors.description ? 'red' : 'green'}}  onBlur={formErrorHanlder} placeholder="..." type="text" defaultValue={album.description} name="description" />
                                    </div>
                                    <span className={styles.error}>{formErrors.description}</span>

                                    <h4>Personnel: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} style={{borderColor: formErrors.personnel ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text" defaultValue={album.personnel} name="personnel" />
                                    </div>
                                    <span className={styles.error}>{formErrors.personnel}</span>

                                    <h4>Album Art: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.picture ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="imageURL" type="text" defaultValue={album.imageURL} name="picture" />
                                    </div>
                                    <span className={styles.error}>{formErrors.picture}</span>

                                    <div className="col-sm-12">
                                        <button className="send">Edit the Album</button>
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

export default routeGuardEdit(Edit);