export default function NewsLetter(){

    return(

        <div className="Newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <h2>Newsletter</h2>
                        <div className="row">
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 padding-right">
                                <input className="email" placeholder="Enter Your Email" type="text" name="Enter Your Email" />
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 padding-left">
                                <button className="submit-btn">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}