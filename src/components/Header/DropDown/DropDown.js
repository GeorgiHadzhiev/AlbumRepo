import { useNavigate } from 'react-router'
import styles from './DropDown.module.css'


function DropDownItem(props){

    let navigate = useNavigate();

    function onClickProfileHandler(props){
        
        
        let page = props.target.textContent
    
        if(page === "My Profile"){
    
            navigate('/myProfile')
    
        }
        else if(page === "Add an Album"){
    
            navigate('/add')
    
        }
    
    }

    return(

        <div onClick={onClickProfileHandler} className={styles.dropDownItem}>

            {props.children}

        </div>

    )



}

export default function DropDown(){

    return( 

        <div className={styles.dropDown}>
            <DropDownItem>My Profile</DropDownItem>
            <DropDownItem>Add an Album</DropDownItem>

        </div>




    )

}