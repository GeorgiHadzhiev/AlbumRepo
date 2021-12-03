import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import UserNav from './UserNav';
import GuestNav from './GuestNav';
import './Header.css'
import Login from '../Login'

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
                        <li className="nav-item">

                            {user.email

                                ?<UserNav />
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