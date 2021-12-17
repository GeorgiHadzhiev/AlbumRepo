import { Card,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from './AlbumCard.module.css'

export default function AlbumCard({album}){

    return(
        
        <Card className={styles.albumCard} >
            <Card.Img variant="top" src={album.picture} />
            <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Title>Year: {album.date}</Card.Title>
                <Card.Text>
                <p>Likes: {album.likes.length} Disslikes: {album.dislikes.length}</p>
                </Card.Text>
                <Button className={styles.detailsButton} as={Link} to={`/details/${album._id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
        
    );

}