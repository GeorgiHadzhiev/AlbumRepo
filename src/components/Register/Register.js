import './Register.css'

import authService from '../../services/authService.js';
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext } from 'react';
import { useNavigate } from 'react-router';

export default function Register(){

    let navigate = useNavigate()

    const {login} = useContext(AuthContext)

    function onSubmitHandlerRegister(e){

        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let firstName = formData.get('first-name');
        let lastName = formData.get('last-name');
        let email = formData.get('email');
        let password = formData.get('password');

        authService.register(firstName,lastName,email,password)
        .then(res => {

            login(res);
            navigate('/catalog');

        })
        .catch(err => {

            console.log(err);

        })
        


        

    }

    return(

        <div className="contact-page">
            <div className="contactbg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contacttitlepage">
                                <h2>Register</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className=" col-md-6 offset-md-3">
                        <div className="address">

                            <form method="POST" onSubmit={onSubmitHandlerRegister}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="First Name" type="text" name="first-name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Last Name" type="text" name="last-name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Email" type="text" name="email" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Password" type="password" name="password" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input className="contactus" placeholder="Repeat Password" type="password" name="repeat-password" />
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="send">Create Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

     

        </div>

    )

}