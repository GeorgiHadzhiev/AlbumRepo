import styles from './DropDown.module.css'

function DropDownItem(props){

    return(

        <a href="/add" className={styles.dropDownItem}>

            {props.children}

        </a>

    )



}

export default function DropDown(){

    return( 

        <div className={styles.dropDown}>
            <DropDownItem >Add Page</DropDownItem>
            <DropDownItem >Add Page</DropDownItem>

        </div>




    )

}