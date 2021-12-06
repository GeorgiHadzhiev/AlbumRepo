import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import UserNav from './UserNav';
import GuestNav from './GuestNav';
import Login from '../Login'
import './Header.css'

export default function Header(){

    const {user} = useContext(AuthContext)

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
                            <Link className="nav-link active catalog" aria-current="page" to="/catalog">Catalog</Link>
                        <li className="nav-item">

                            {user.email

                                ?<UserNav email={user.email} />
                                :<GuestNav />

                            } 

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

