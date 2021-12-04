import { Link } from "react-router-dom"

export default function AlbumCard({album}){

    return(

        <li>
            <h3>Name: {album.name}</h3>
            <p>Year: {album.year}</p>
            <p>Description: {album.description}</p>
            <p>
                <img src={album.imageURL} alt="broken"/>
            </p>
            <Link to={`/details/${album._id}`}>Details</Link>



        </li>

    )

}