import styles from './DropDown.module.css'
import { Link } from 'react-router-dom'


export default function DropDown(){

    return( 

        <div className={styles.dropDown}>
            
            <Link to="/myProfile" className={styles.dropDownItemProfile}>My Profile</Link>
            <Link to="/add" className={styles.dropDownItemAdd}>Add an Album</Link>
            <Link to="/logout" className={styles.dropDownItemLogout}>Logout</Link>

        </div>

    )

}