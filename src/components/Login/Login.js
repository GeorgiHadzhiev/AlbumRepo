import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(){

  return(

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Enter your details</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
              </div>
              <div className="dropdown mt-3">
              <button type="button" className="btn btn-success">Login</button>
              </div>
              <Link to="/register">Don't have an account?<br/>Click here to Register</Link>
          </div>
      </div>

  )

}