import { useNavigate } from 'react-router';
import { useContext,useState } from 'react';

import {AuthContext} from '../../contexts/AuthContext.js'
import albumService from '../../services/albumService.js'
import { isAuth } from '../../HOCs/isAuth.js'
import styles from './Add.module.css'

function Add(){

    const {user} = useContext(AuthContext);
    const [formErrors,setFormErrors] = useState({});
    const [blankForm,setBlankForm] = useState(false)
    let navigate  = useNavigate();


    function onAlbumCreate(e){

        e.preventDefault()

        if(Object.values(formErrors).some(x => x !== null)){

            let invalidFiled = Object.entries(formErrors).filter(x => x[1] !== null)[0]
            let invalidEl = document.getElementsByName(invalidFiled[0])[0]

            return invalidEl.scrollIntoView(invalidEl)

        }
    

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name')
        let composerArtist = formData.get('artist')
        let date = formData.get('date')
        let numberOfSongs = formData.get('tracks')
        let genre = formData.get('genre')
        let tracklist = formData.get('tracklist')
        let description = formData.get('description')
        let personnel = formData.get('personnel')
        let imageURL = formData.get('picture')

        if(!name || !composerArtist || !date || !numberOfSongs || !genre || !tracklist || !description || !personnel || !imageURL){

            e.currentTarget.scrollIntoView();

            setBlankForm(true);

            return setTimeout(() =>{

                setBlankForm(false)

            },4000)

        }
        
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

                        {blankForm && <div className="alert alert-danger blankFormAlert" role="alert">Please fill out all the blank spaces</div> }

                            <form onSubmit={onAlbumCreate} method="POST">
                                <div className="row">
                                <h1>General Info:</h1>
                                    <h4>Album Name: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.name ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="Name" type="text" name="name" />
                                    </div>
                                    <span className={styles.error}>{formErrors.name}</span>

                                    <h4>Composer/Artist: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.artist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="Name" type="text"  name="artist" />
                                    </div>
                                    <span className={styles.error}>{formErrors.artist}</span>

                                    <h4>Date of Release: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.date ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="year" type="number"  name="date" />
                                    </div>
                                    <span className={styles.error}>{formErrors.date}</span>

                                    <h4>Number of Tracks: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.tracks ? 'red' : 'green'}}  onBlur={formErrorHanlder} type="number" placeholder="№"name="tracks" />
                                    </div>
                                    <span className={styles.error}>{formErrors.tracks}</span>
                                    
                                    <h4>Genre: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus"  style={{borderColor: formErrors.genre ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text"  name="genre" />
                                    </div>
                                    <span className={styles.error}>{formErrors.genre}</span>

                                    <h1>Tracklist:</h1>

                                    <div className={styles.tracklistContainer}>
                                        <textarea className={styles.tracklist}  style={{borderColor: formErrors.tracklist ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text"  name="tracklist" />
                                    </div>
                                    <span className={styles.error}>{formErrors.tracklist}</span>
                                    
                                    <h1>Additional Info:</h1>

                                    <h4>Description: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} style={{borderColor: formErrors.description ? 'red' : 'green'}}  onBlur={formErrorHanlder} placeholder="..." type="text"  name="description" />
                                    </div>
                                    <span className={styles.error}>{formErrors.description}</span>

                                    <h4>Personnel: </h4>
                                    <div className="col-sm-12">
                                        <textarea className={styles.description} style={{borderColor: formErrors.personnel ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="..." type="text"  name="personnel" />
                                    </div>
                                    <span className={styles.error}>{formErrors.personnel}</span>

                                    <h4>Album Art: </h4>
                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.picture ? 'red' : 'green'}} onBlur={formErrorHanlder} placeholder="imageURL" type="text"  name="picture" />
                                    </div>
                                    <span className={styles.error}>{formErrors.picture}</span>

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

    )

}

export default isAuth(Add);