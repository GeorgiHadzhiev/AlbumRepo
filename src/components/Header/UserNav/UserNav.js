import { useState,useContext } from "react"

import DropDown from "../DropDown";
import { AuthContext } from '../../../contexts/AuthContext.js';


export default function UserNav({firstName,lastName,email}){

    const {user} = useContext(AuthContext)
    const [open,setOpen] = useState(false);

    function onClickHandler(e){

        setOpen(!open)
    
    }


    return(
        
        <div id="userNav">

            <img src="/icons/avatar5.png" alt="Avatar" className="avatar" onClick={onClickHandler} />
            <span id="welcomeMessage">Welcome, {user.email} </span>

            {open && <DropDown open={open} setOpen={setOpen} firstName={user.firstName} lastName={user.lastName} />}

        </div>

    )

}