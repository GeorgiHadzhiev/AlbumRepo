import { useNavigate } from 'react-router-dom'
import { useContext,useState,useRef } from 'react';

import './Login.css'
import { AuthContext } from '../../contexts/AuthContext.js';
import authService from '../../services/authService.js'

export default function Login(){

    const {login} = useContext(AuthContext);
    const [formErrors,setFormErrors] = useState({email: null,password: null});
    let closeRef = useRef(null);
    const navigate = useNavigate();

    const onLoginHandler = (e) =>{

        e.preventDefault();

        let formData = new FormData(e.currentTarget)

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email,password)
        .then(res => {

            login(res);
            closeRef.current.click()
    
        })
        .catch(err =>{

            setFormErrors(formErrors => ({...formErrors, wrongDetails: `${err}`}))

        })

    }

    function emailErrorHandler(e){

        let formEmailValue = e.target.value;
        
        let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

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

    function onClickHandler(e){

        navigate('/register')

    }

  return(

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
          <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Enter your details</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>


          <form id="loginForm" onSubmit={onLoginHandler}>
                <div ref={closeRef} typeof="button" data-bs-dismiss="offcanvas" aria-label="Close"></div>
            <div className="offcanvas-body" aria-label="Close">
                <div>
                        <span className="registrationError">{formErrors.email}</span>
                        <div className="form-floating mb-3">
                            <input onBlur={emailErrorHandler} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <span className="registrationError">{formErrors.password}</span>
                        <div className="form-floating">
                            <input onBlur={passwordErrorHandler} type="password" className="form-control" id="floatingPassword" placeholder="Password"name="password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                </div>
                <div className="dropdown mt-3">
                    <input type="submit" className="btn btn-success" value="Login"/>
                </div>
            </div>

          </form>

            <div className="col-sm-12">
                <button className="registerLinkButton" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClickHandler}>Don't Have an account?<br/>Click here to register!</button>
            </div>
            <div className="col-sm-12 loginDetailsErrorMessage" >
                <div className="alert alert-danger blankFormAlert" role="alert">{formErrors.wrongDetails}</div>
            </div>

      </div>

  )

}