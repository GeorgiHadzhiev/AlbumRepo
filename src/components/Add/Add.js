

export default function Add(){

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

                            <form>
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
                                        <input className="contactus" placeholder="image" type="text" name="imageUrl" />
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