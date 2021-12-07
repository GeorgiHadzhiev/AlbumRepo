import { useState,useEffect } from "react";

import albumService from "../services/albumService.js";

const useAlbumState = (albumId) =>{

    const [album,setAlbum] = useState({});

    useEffect(() => {

        albumService.getOne(albumId)
        .then(res =>{

            setAlbum(res)

        })

    }, [albumId]);

    return [

        album,
        setAlbum

    ]

}

export default useAlbumState;