export default function Albums(){

    return(

        <div id="screenshot" className="Albums">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Albums-box </h2>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                        <div className="Albums-box">
                            <figure>
                                <a href="images/album1.jpg" className="fancybox" rel="ligthbox">
                                    <img src="images/album1.jpg" className="zoom img-fluid " alt="../../public/images/brokenImage.png" />
                                </a>
                                <span className="hoverle">
                            <a href="images/album1.jpg" className="fancybox" rel="ligthbox"><img src="images/search.png" alt="../../public/images/brokenImage.png" /></a>
                            </span>
                            </figure>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                        <div className="Albums-box">
                            <figure>
                                <a href="images/album2.jpg" className="fancybox" rel="ligthbox ">
                                    <img src="images/album2.jpg" className="zoom img-fluid " alt="../../public/images/brokenImage.png" />
                                </a>
                                <span className="hoverle">
                            <a href="images/album2.jpg" className="fancybox" rel="ligthbox"><img src="images/search.png" alt="../../public/images/brokenImage.png" /></a>
                            </span>
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}