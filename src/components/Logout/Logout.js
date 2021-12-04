import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.js";
import authService from "../../services/authService.js";

export default function Logout({onLogout}){

    const navigate = useNavigate()

    const {user,logout} = useContext(AuthContext)
    useEffect(() =>{

        authService.logout(user.accessToken)
        .then(() =>{
    
            logout();    
            navigate('/')
    
        })


    },[])


    return null;
}