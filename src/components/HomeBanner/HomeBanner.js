import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

import {Card} from 'react-bootstrap'
import styles from './HomeBanner.module.css'
import {pageTransition} from '../../constants'

export default function HomeBanner(){

    return(

    <motion.div initial="out" animate="in" exit="out" variants={pageTransition} >

        <Card className={styles.homeBanner} >
            <Card.Img src="/images/vinyl wallpaper.jpg" alt="Card image" />
            <Card.ImgOverlay className={styles.cardOverlay}>
                <Card.Title className={styles.cardTitle}>Welcome</Card.Title>
                <Card.Text className={styles.cardBody}>
                To The AlbumRepo
                </Card.Text>
                <Card.Text className={styles.cardFooter}>The best musical repository</Card.Text>
            </Card.ImgOverlay>
        </Card>

    </motion.div>

    )

}