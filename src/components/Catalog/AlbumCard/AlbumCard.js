import { Link } from "react-router-dom"

export default function AlbumCard({album}){

    return(

        <li>
            <h3>Name: {album.name}</h3>
            <p>Year: {album.date}</p>
            <p>
                <img src={album.picture} alt="broken"/>
            </p>
            <p>Likes: {album.likes.length} </p>
            <p>Disslikes: {album.dislikes.length}</p>
            <Link to={`/details/${album._id}`}>Details</Link>



        </li>

    )

}