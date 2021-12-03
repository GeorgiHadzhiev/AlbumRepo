import { useState } from "react"

import DropDown from "../DropDown";


export default function UserNav(){

    const [open,setOpen] = useState(false);

    return(

        <div id="userNav">

            <img src="icons/avatar5.png" alt="Avatar" className="avatar" onClick={() => setOpen(!open)} />

            {open && <DropDown />}

        </div>


    )

}