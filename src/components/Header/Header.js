import {Link} from 'react-router-dom'

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
                                        <Link to="/"><img src="images/logo.jpg" alt="logo" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                            <div class="menu-area">
                                <div class="limit-box">
                                    <nav class="main-menu">
                                        <ul class="menu-area-main">
                                            <li class="active"> <Link to="/">Home</Link> </li>
                                            <li> <Link to="/about">about</Link> </li>
                                            <li> <Link to="/albums"> Albums</Link> </li>
                                            <li> <Link to="/blog">Blog</Link> </li>
                                            <li> <Link to="/contact">Contact</Link> </li>
                                            <li> <Link to="/login">Login</Link> </li>
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