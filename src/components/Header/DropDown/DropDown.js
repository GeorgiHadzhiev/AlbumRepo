import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import styles from './DropDown.module.css'


export default function DropDown({setOpen}){

    let dropDownRef = useRef(null);

    useEffect(() =>{

        document.addEventListener('click', (e) =>{

            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){

                setOpen(false);

            }

        })

    },[setOpen])

    function onClickHandler(){

        setOpen(false)

    }

    
    return( 

        <div ref={dropDownRef} className={styles.dropDown} >

            <Link to="/myProfile" className={styles.dropDownItemProfile} onClick={onClickHandler} >My Profile</Link>
            <Link to="/add" className={styles.dropDownItemAdd} onClick={onClickHandler}>Add an Album</Link>
            <Link to="/logout" className={styles.dropDownItemLogout} onClick={onClickHandler}>Logout</Link>
            
        </div>

    )

}