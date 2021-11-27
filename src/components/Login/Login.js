export default function Register(){

    return(

        <body class="main-layout contact-page">

            <div class="contactbg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="contacttitlepage">
                                <h2>login</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container">
                <div class="row">
                    <div class=" col-md-6 offset-md-3">
                        <div class="address">

                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input class="contactus" placeholder="Name" type="text" name="Name" />
                                    </div>
                                    <div class="col-sm-12">
                                        <input class="contactus" placeholder="Phone" type="text" name="Email" />
                                    </div>
                                    <div class="col-sm-12">
                                        <input class="contactus" placeholder="Email" type="text" name="Email" />
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea class="textarea" placeholder="Message" type="text" name="Message"></textarea>
                                    </div>
                                    <div class="col-sm-12">
                                        <button class="send">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright">
                <div class="container">
                    <p>© 2019 All Rights Reserved. <a href="https://html.design/">Free html Templates</a></p>
                </div>
            </div>

        </body>

    )

}