import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import styles from './DropDown.module.css'


export default function DropDown({open,setOpen}){

    let dropDownRef = useRef(null);

    useEffect(() =>{

        document.addEventListener('click', (e) =>{

            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){

                setOpen(!open);

            }

        })

    },[setOpen,open])

    function onClickHandler(){

        setOpen(!open)

    }

    
    return( 

        <div ref={dropDownRef} className={styles.dropDown} >

            <Link to="/myAlbums" className={styles.dropDownItemProfile} onClick={onClickHandler}  >My Albums</Link>
            <Link to="/add" className={styles.dropDownItemAdd} onClick={onClickHandler} >Add an Album</Link>
            <Link to="/logout" className={styles.dropDownItemLogout} onClick={onClickHandler} >Logout</Link>
            
        </div>

    )

}