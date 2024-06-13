import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.js";
import authService from "../../services/authService.js";
import Loader from "../Loader/Loader.js";

export default function Logout(){

    const navigate = useNavigate();

    const {user,logout} = useContext(AuthContext)
    useEffect(() =>{

        authService.logout(user.accessToken)
        .then(() =>{
            
            logout();    
            navigate('/');
        
        },)

    },[])

    return <Loader />;

}