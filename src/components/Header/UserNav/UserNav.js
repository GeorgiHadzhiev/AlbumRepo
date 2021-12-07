import { useState } from "react"

import DropDown from "../DropDown";


export default function UserNav({email}){

    const [open,setOpen] = useState(false);

    function onClickHandler(e){
   
        setOpen(!open)
    
    }


    return(
        
        <div id="userNav">

            <img src="/icons/avatar5.png" alt="Avatar" className="avatar" onClick={onClickHandler} />
            <span id="welcomeMessage">Welcome, {email}</span>

            {open && <DropDown open={open} setOpen={setOpen}  />}

        </div>

    )

}