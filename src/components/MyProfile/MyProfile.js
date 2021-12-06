import { isAuth } from '../../HOCs/isAuth.js'

function MyProfile(){
    
    return(
        
        <h1>My profile</h1>
        
        )
        
    }

export default isAuth(MyProfile);