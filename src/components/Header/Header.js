import {Link} from 'react-router-dom'

export default function Header(){

    return(

        <header class="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsWow" aria-controls="navbarsWow" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container">
                
                <a class="navbar-brand" href="index.html">
                <img src="./images/logo.png" alt="Affiliates - Free Bootstrap Template" />
                </a>
        
                
                <div class="collapse navbar-collapse" id="navbarsWow">
                    
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item" href="single.html">Left Sidebar</a>
                            <a class="dropdown-item" href="single-sidebar-right.html">Right Sidebar</a>
                        </div>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="category.html">Category</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                        <a target="_blank" class="nav-link highlight" href="https://gum.co/affiliates-html-template">Download</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </header>

    )

}