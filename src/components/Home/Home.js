import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import styles from './Home.module.css'

export default function Home(){

    return(

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

    )



}