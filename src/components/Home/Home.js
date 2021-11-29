import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

import {Card} from 'react-bootstrap'
import styles from './Home.module.css'
import {pageTransition} from '../../constants'

export default function Home(){

    return(

            <motion.div initial="out" animate="in" exit="out" variants={pageTransition} >

                <Card className={styles.homeBanner} >
                    <Card.Img src="/images/banner2.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={{fontWeight: "bold"}}>Card title</Card.Title>
                        <Card.Text style={{fontSize: '70px'}}>
                        The Perfect Music.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

            </motion.div>

    )



}