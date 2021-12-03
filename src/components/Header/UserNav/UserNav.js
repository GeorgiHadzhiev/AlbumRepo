import { useState } from "react"

import DropDown from "../DropDown";


export default function UserNav({email}){

    const [open,setOpen] = useState(false);

    return(

        <div id="userNav">

            <img src="icons/avatar5.png" alt="Avatar" className="avatar" onClick={() => setOpen(!open)} />
            <span id="welcomeMessage">Welcome, {email}</span>

            {open && <DropDown />}

        </div>


    )

}