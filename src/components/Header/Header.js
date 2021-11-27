export default function Header(){

    return(

        <header>
            <div class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
                            <div class="full">
                                <div class="center-desk">
                                    <div class="logo">
                                        <a href="index.html"><img src="images/logo.jpg" alt="logo" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                            <div class="menu-area">
                                <div class="limit-box">
                                    <nav class="main-menu">
                                        <ul class="menu-area-main">
                                            <li class="active"> <a href="index.html">Home</a> </li>
                                            <li> <a href="about.html">about</a> </li>
                                            <li> <a href="album.html"> Albums</a> </li>
                                            <li> <a href="blog.html">Blog</a> </li>
                                            <li> <a href="contact.html">Contact</a> </li>
                                            <li> <a href="#contact">Login</a> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                            <form class="search">
                                <input class="form-control" type="text" placeholder="Search" />
                                <button><img src="images/search_icon.png" alt="../../public/images/brokenImage.png" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        </header>

    )

}