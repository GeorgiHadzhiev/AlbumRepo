export default function Albums(){

    return(

        <div id="screenshot" class="Albums">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="titlepage">
                            <h2>Albums-box </h2>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                        <div class="Albums-box">
                            <figure>
                                <a href="images/album1.jpg" class="fancybox" rel="ligthbox">
                                    <img src="images/album1.jpg" class="zoom img-fluid " alt="../../public/images/brokenImage.png" />
                                </a>
                                <span class="hoverle">
                            <a href="images/album1.jpg" class="fancybox" rel="ligthbox"><img src="images/search.png" /></a>
                            </span>
                            </figure>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                        <div class="Albums-box">
                            <figure>
                                <a href="images/album2.jpg" class="fancybox" rel="ligthbox ">
                                    <img src="images/album2.jpg" class="zoom img-fluid " alt="../../public/images/brokenImage.png" />
                                </a>
                                <span class="hoverle">
                            <a href="images/album2.jpg" class="fancybox" rel="ligthbox"><img src="images/search.png" /></a>
                            </span>
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}