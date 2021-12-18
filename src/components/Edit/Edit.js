import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './Edit.module.css'
import {pageTransition} from '../../constants'
import albumService from '../../services/albumService.js'
import useAlbumState from '../../hooks/useAlbumState.js';
import errorHelper from '../../helpers/errorHelper.js';
import { routeGuardOwner } from '../../HOCs/routeGuard.js'


function Edit(){

    const {albumId} = useParams();
    const [formErrors,setFormErrors] = useState({});
    const [album] = useAlbumState(albumId);
    const navigate = useNavigate();

    function albumEditSubmitHandler(e){
        
        e.preventDefault();
        let albumData = Object.fromEntries(new FormData(e.currentTarget))

        if(Object.values(formErrors).some(x => x !== null)){
            
            errorHelper.addAlbumErrorScroller(formErrors);
            return;
            
        }
    
        albumService.update(albumId,albumData)
        .then(() =>{

            navigate(`/details/${albumId}`)

        })
        
    }

    function formErrorHanlder(e){
    
        let formValue = e.target.value;
        let formName = e.target.name
        errorHelper.formAlbumChecker(formValue,formName,setFormErrors);

    }


    return(

        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} >

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
                                            <input className="contactus" style={{borderColor: formErrors.artist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="Name" type="text" defaultValue={album.artist} name="artist" />
                                        </div>
                                        <span className={styles.error}>{formErrors.artist}</span>

                                        <h4>Date of Release: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.date ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="year" type="number" defaultValue={album.date} name="date" />
                                        </div>
                                        <span className={styles.error}>{formErrors.date}</span>

                                        <h4>Number of Tracks: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.tracks ? 'red' : 'green'}}  onBlur={formErrorHanlder} type="number" placeholder="№" defaultValue={album.tracks} name="tracks" />
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
                                            <input className="contactus" style={{borderColor: formErrors.picture ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="imageURL" type="text" defaultValue={album.picture} name="picture" />
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

        </motion.div>


    )

}

export default routeGuardOwner(Edit);