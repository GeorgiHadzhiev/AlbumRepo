import { Link,useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import authService from '../../services/authService.js'

export default function Login(){

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) =>{

        e.preventDefault();

        let formData = new FormData(e.currentTarget)

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email,password)
        .then(res => {

            login(res);
            navigate('/');

        })
        .catch(err =>{

            console.log(err);

        })

    }

  return(

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Enter your details</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>


          <form id="loginForm" onSubmit={onLoginHandler}>

            <div className="offcanvas-body">
                <div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"name="password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                </div>
                <div className="dropdown mt-3">
                    <input type="submit" className="btn btn-success" value="Login" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
            </div>

          </form>

            <Link className={styles.registerLink} to="/register">Don't have an account?<br/>Click here to Register</Link>

      </div>

  )

}