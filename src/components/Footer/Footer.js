import { motion } from 'framer-motion';
import './Footer.css'

import {pageTransition} from '../../constants'

export default function Footer(){

    return(

        <motion.div initial="out" animate="in" exit="out" variants={pageTransition} >

            <footer>

                <div className="copyright">
                    <p>© 2019 All Rights Reserved. <a href="https://html.design/">Free html Templates</a></p>
                </div>

            </footer>

        </motion.div>


    )

}