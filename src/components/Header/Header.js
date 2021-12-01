import { Link } from 'react-router-dom'
import './Header.css'
import Login from '../Login'

export default function Header(){

    const onLogin = () => {

        

    }

    return(

        <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AlbumRepo</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">

                        <button className="btn btn-primary login" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Sign in/up
                        </button>

                    </li>
                </ul>
                
                </div>
            </div>
        </nav>

        <div id="login">

            <Login />

        </div>


        </>


    )

}