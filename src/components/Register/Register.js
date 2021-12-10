import './Register.css'

import authService from '../../services/authService.js';
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router';

export default function Register(){

    let navigate = useNavigate()

    const [formErrors,setFormErrors] = useState({firstName: null, lastName: null, email: null, password: null, repeatPassword: null});
    const [originalPassword,setOriginalPassword] = useState('');
    const {login} = useContext(AuthContext);

    function onSubmitHandlerRegister(e){

        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let password = formData.get('password');

    
        authService.register(firstName.toUpperCase(),lastName.toUpperCase(),email,password)
        .then(res => {

            login(res);
            navigate('/catalog');

        })
        .catch(err => {

            console.log(err);

        })
        
    }

    function firstNameErrorHandler(e){
    
        let formFirstName = e.target.value;
        

     
        if(formFirstName.length <= 0){

            setFormErrors(formErrors => ({...formErrors, firstName: `First Name cannot be blank`}))

        }
        else if(formFirstName.length > 20 || formFirstName.length < 2){


            setFormErrors(formErrors => ({...formErrors, firstName: `First Name cannot be more than 20 characters or less than 2 characters`}))

        }
        else{

            setFormErrors(formErrors => ({...formErrors, firstName: null}))

        }

    }
    function lastNameErrorHandler(e){
    
        let formLastName = e.target.value;
        

     
        if(formLastName.length <= 0){

            setFormErrors(formErrors => ({...formErrors, lastName: `Last Name cannot be blank`}))

        }
        else if(formLastName.length > 20 || formLastName.length < 2){


            setFormErrors(formErrors => ({...formErrors, lastName: `Last Name cannot be more than 20 characters or less than 2 characters`}))

        }
        else{

            setFormErrors(formErrors => ({...formErrors, lastName: null}))

        }

    }
    function emailErrorHandler(e){
    
        let formEmailValue = e.target.value;
        
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
     
        if(formEmailValue.length <= 0){

            setFormErrors(formErrors => ({...formErrors, email: `Email cannot be blank`}))

        }
        else if(formEmailValue.length > 40){

            setFormErrors(formErrors => ({...formErrors, email: `Email cannot be more than 40 characters`}))

        }
        else if(!emailRegex.test(formEmailValue)){

            setFormErrors(formErrors => ({...formErrors, email: `Email must be valid`}))

        }
        else{

            setFormErrors(formErrors => ({...formErrors, email: null}))

        }

    }
    function passwordErrorHandler(e){
    
        let formPasswordValue = e.target.value;
        setOriginalPassword(formPasswordValue)
        
    
        if(formPasswordValue.length <= 0){

            setFormErrors(formErrors => ({...formErrors, password: `Password cannot be blank`}))

        }
        else if(formPasswordValue.length < 6 || formPasswordValue.length > 30){

            setFormErrors(formErrors => ({...formErrors, password: `Password cannot be less than 6 characters or more than 30 characters`}))

        }
        else{

            setFormErrors(formErrors => ({...formErrors, password: null}))

        }

    }
    function repeatPasswordErrorHandler(e){
    
        let formRepeatPasswordValue = e.target.value;
        
        if(formRepeatPasswordValue.length <= 0){

            setFormErrors(formErrors => ({...formErrors, repeatPassword: `Password cannot be blank`}))

        }
        else if(formRepeatPasswordValue.length < 6 || formRepeatPasswordValue.length > 30){

            setFormErrors(formErrors => ({...formErrors, repeatPassword: `Password cannot be less than 6 characters or more than 30 characters`}))

        }
        else if(formRepeatPasswordValue !== originalPassword){

            setFormErrors(formErrors => ({...formErrors, repeatPassword: `Password and Repeat Password must match`}))

        }
        else{

            setFormErrors(formErrors => ({...formErrors, repeatPassword: null}))

        }

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
                                        <input className="contactus" style={{borderColor: formErrors.firstName ? 'red' : 'green'}} onBlur={firstNameErrorHandler} placeholder="First Name" type="text" name="firstName" />
                                    </div>
                                    <span className="registrationError">{formErrors.firstName}</span>

                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.lastName ? 'red' : 'green'}} onBlur={lastNameErrorHandler} placeholder="Last Name" type="text" name="lastName" />
                                    </div>
                                    <span className="registrationError">{formErrors.lastName}</span>

                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.email ? 'red' : 'green'}} onBlur={emailErrorHandler} placeholder="Email" type="text" name="email" />
                                    </div>
                                    <span className="registrationError">{formErrors.email}</span>

                                    <div className="col-sm-12">
                                        <input id="originalPassword" className="contactus" style={{borderColor: formErrors.password ? 'red' : 'green'}} onBlur={passwordErrorHandler} placeholder="Password" type="password" name="password" />
                                    </div>
                                    <span className="registrationError">{formErrors.password}</span>

                                    <div className="col-sm-12">
                                        <input className="contactus" style={{borderColor: formErrors.repeatPassword ? 'red' : 'green'}} onChange={repeatPasswordErrorHandler} placeholder="Repeat Password" type="password" name="repeatPassword" />
                                    </div>
                                    <span className="registrationError">{formErrors.repeatPassword}</span>

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