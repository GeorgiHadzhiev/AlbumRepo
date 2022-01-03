import { Card } from "react-bootstrap"

import styles from './ErrorPage.module.css'


export default function ErrorPage(){

    return(

        <Card className="bg-white text-dark">
            <Card.Img src="/images/404.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className={styles.text}>OOPS</Card.Title>
                <Card.Text className={styles.text}>
                It seems you're in the wrong place

                dasdawdasd
                </Card.Text>
                <Card.Text className={styles.text}>We can't find anything here...</Card.Text>
            </Card.ImgOverlay>
        </Card>

    )

}