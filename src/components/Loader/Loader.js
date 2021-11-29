import { motion } from 'framer-motion';

import styles from './Loader.module.css'
import {pageTransition} from '../../constants'

export default function Loader(){

    return(       

        <motion.div 
            initial="out" animate="in" exit="out" variants={pageTransition}
            className={styles.loader_bg}>
            <div className={styles.loader}><img src="/images/loading.gif" alt="#" /></div>
        </motion.div>

        
    )

}