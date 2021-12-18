import { useNavigate } from 'react-router';
import { useState,useRef } from 'react';
import { motion } from 'framer-motion';

import albumService from '../../services/albumService.js'
import { routeGuardIfNotUser } from '../../HOCs/routeGuard.js'
import {pageTransition} from '../../constants'
import errorHelper from '../../helpers/errorHelper.js';
import './Add.css'

function Add(){

    const [formErrors,setFormErrors] = useState({});
    let errorRef = useRef(null);
    let navigate  = useNavigate();


    function onAlbumCreate(e){

        e.preventDefault()
        let albumData = Object.fromEntries(new FormData(e.currentTarget))
        
        
        if(Object.values(formErrors).some(x => x !== null)){
            
            errorHelper.addAlbumErrorScroller(formErrors);
            return;
            
        }
        
        if(Object.values(albumData).some(x => x === '')){

            let blankFormErrorDiv = errorRef.current
            errorHelper.addAlbumBlankScroller(blankFormErrorDiv);
            return;

        }
        
        
        albumService.create(albumData)
        .then(() => {

            navigate('/catalog')

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
                                    <h2>Add An Album</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="addRow">
                        <div className=" col-md-6 offset-md-3">
                            <div className="address">

                                <div ref={errorRef} className="blankFormAlertAdd" role="alert">Please fill out all the blank spaces</div>

                                <form onSubmit={onAlbumCreate} method="POST">
                                    <div className="row">
                                    <h1>General Info:</h1>
                                        <h4>Album Name: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.name ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="Name" type="text" name="name" />
                                        </div>
                                        <span className="addError">{formErrors.name}</span>

                                        <h4>Composer/Artist: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.artist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="Name" type="text"  name="artist" />
                                        </div>
                                        <span className="addError">{formErrors.artist}</span>

                                        <h4>Date of Release: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.date ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="year" type="number"  name="date" />
                                        </div>
                                        <span className="addError">{formErrors.date}</span>

                                        <h4>Number of Tracks: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.tracks ? 'red' : 'green'}}  onBlur={formErrorHanlder} type="number" placeholder="№"name="tracks" />
                                        </div>
                                        <span className="addError">{formErrors.tracks}</span>
                                        
                                        <h4>Genre: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus"  style={{borderColor: formErrors.genre ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text"  name="genre" />
                                        </div>
                                        <span className="addError">{formErrors.genre}</span>

                                        <h1>Tracklist:</h1>

                                        <div className="addTracklistContainer">
                                            <textarea className="addTracklist"  style={{borderColor: formErrors.tracklist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text"  name="tracklist" />
                                        </div>
                                        <span className="addError">{formErrors.tracklist}</span>
                                        
                                        <h1>Additional Info:</h1>

                                        <h4>Description: </h4>
                                        <div className="col-sm-12">
                                            <textarea className="addDescription" style={{borderColor: formErrors.description ? 'red' : 'green'}}  onBlur={formErrorHanlder} placeholder="..." type="text"  name="description" />
                                        </div>
                                        <span className="addError">{formErrors.description}</span>

                                        <h4>Personnel: </h4>
                                        <div className="col-sm-12">
                                            <textarea className="addDescription" style={{borderColor: formErrors.personnel ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text"  name="personnel" />
                                        </div>
                                        <span className="addError">{formErrors.personnel}</span>

                                        <h4>Album Art: </h4>
                                        <div className="col-sm-12">
                                            <input className="contactus" style={{borderColor: formErrors.picture ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="imageURL" type="text"  name="picture" />
                                        </div>
                                        <span className="addError">{formErrors.picture}</span>

                                        <div className="col-sm-12">
                                            <button className="send">Add the Album</button>
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

export default routeGuardIfNotUser(Add);