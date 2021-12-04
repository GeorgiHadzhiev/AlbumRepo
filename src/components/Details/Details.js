

export default function Details(){

    return(

        <section id="details-page" className="details">
            <div className="album-information">
                <h3>Name: {album.name}</h3>
                <p className="type">Year: {album.year}</p>
                <p className="img"><img src={album.imageUrl} /></p>
                <div className="actions">
                    <a className="button" href="/edit">Edit</a>
                    <a className="button" href="/delete">Delete</a>
                    
                </div>
            </div>
            <div className="album-description">
                <h3>Description:</h3>
                <p>{album.description}</p>
            </div>
        </section>

    )

}