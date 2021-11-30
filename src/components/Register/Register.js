export default function Register(){

    return(

        <>

        <div className="contactbg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contacttitlepage">
                            <h2>register</h2>
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
                                    <input className="contactus" placeholder="Email" type="text" name="Name" />
                                </div>
                                <div className="col-sm-12">
                                    <input className="contactus" placeholder="Password" type="text" name="Email" />
                                </div>
                                <div className="col-sm-12">
                                    <input className="contactus" placeholder="Email" type="text" name="Email" />
                                </div>
                                <div className="col-sm-12">
                                    <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button className="send">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>

    )

}