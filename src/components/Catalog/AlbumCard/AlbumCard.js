import { Card,Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function AlbumCard({album}){

    return(
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={album.picture} />
            <Card.Body>
                <Card.Title>Name: {album.name}</Card.Title>
                <Card.Title>Year: {album.date}</Card.Title>
                <Card.Text>
                <p>Likes: {album.likes.length} </p>
                <p>Disslikes: {album.dislikes.length}</p>
                </Card.Text>
                <Button as={Link} to={`/details/${album._id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
        
    );

}