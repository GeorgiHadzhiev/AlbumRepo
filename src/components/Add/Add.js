import { useNavigate } from 'react-router';

import albumService from '../../services/albumService.js'

export default function Add(){

    let navigate  = useNavigate()

    function onAlbumCreate(e){

        e.preventDefault()

        let formData = new FormData(e.currentTarget);

        let name = formData.get('Name')
        let year = formData.get('Year')
        let description = formData.get('Description')
        let imageURL = formData.get('imageURL')

        albumService.create({

            name,
            year,
            description,
            imageURL,

        })
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
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Name" type="text" name="Name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Year" type="text" name="Year" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Description" type="text" name="Description" />
                                    </div>
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