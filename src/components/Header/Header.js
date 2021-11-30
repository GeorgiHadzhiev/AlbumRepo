import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AlbumRepo</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link login" to="/login">Login</Link>
                        <Link className="nav-link register" to="/register">Register</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>


    )

}