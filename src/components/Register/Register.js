import './Register.css'

import authService from '../../services/authService.js';
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext,useState,useRef} from 'react';
import { useNavigate } from 'react-router';
import errorHelper from '../../helpers/errorHelper.js'
import { routeGuardIfUser } from '../../HOCs/routeGuard.js'



function Register(){

    let navigate = useNavigate()
    let errorRef = useRef(null)
    
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
        let rePassword = formData.get('repeatPassword');
        
        if(Object.values(formErrors).some(x => x !== null)){
            
            return;
            
        }
        
        if(!firstName || !lastName || !email || !password || !rePassword){

            let blankFormErrorDiv = errorRef.current
            blankFormErrorDiv.classList.add('fade')
            
            return setTimeout(() =>{
                
                blankFormErrorDiv.classList.remove('fade')
                
                
            },4000)
            
        }
        
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
        errorHelper.firstNameChecker(formFirstName,setFormErrors);
        

    }
    function lastNameErrorHandler(e){
    
        let formLastName = e.target.value;
        errorHelper.lastNameChecker(formLastName,setFormErrors);

    }
    function emailErrorHandler(e){
    
        let formEmailValue = e.target.value;
        errorHelper.emailChecker(formEmailValue,setFormErrors);

    }
    function passwordErrorHandler(e){
    
        let formPasswordValue = e.target.value;
        setOriginalPassword(formPasswordValue);
        errorHelper.passwordChecker(formPasswordValue,setFormErrors);

    }
    function repeatPasswordErrorHandler(e){
    
        let formRepeatPasswordValue = e.target.value;
        errorHelper.repeatPasswordChecker(formRepeatPasswordValue,setFormErrors,originalPassword);

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

                                
                                <div ref={errorRef} className="alert alert-danger blankFormAlert" role="alert">Please fill out all the blank spaces</div>
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
                                        <input className="contactus" style={{borderColor: formErrors.repeatPassword ? 'red' : 'green'}} onBlur={repeatPasswordErrorHandler} placeholder="Repeat Password" type="password" name="repeatPassword" />
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

export default routeGuardIfUser(Register);