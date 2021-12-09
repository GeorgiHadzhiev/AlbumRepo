import {request} from './requester.js'

const baseUrl = 'http://localhost:3030/data'


const getAll = () => request(`${baseUrl}/albums`)
    

const getOne = async (id) => {

    let res = await fetch(`${baseUrl}/albums/${id}`)
    let album = await res.json();

    return album

}

const create = async (data,token) =>{

    let res = await fetch(`${baseUrl}/albums`, {

        method: 'POST',
        headers:{

            'content-type': 'application/json',
            'X-Authorization': token,
            
        },
        body: JSON.stringify({...data})

    })

    let result = await res.json()

    return result

}

const deletePost = async (id,token) =>{

    let res = await fetch(`${baseUrl}/albums/${id}`, {

        method: 'DELETE',
        headers:{

            'X-Authorization': token,
            
        },

    })

    let result = await res.json()

    return result

}

const update = async (id,data,token) => {

    let res = await fetch(`${baseUrl}/albums/${id}`, {

        method: 'PUT',
        headers:{

            'content-type': 'application/json',
            'X-Authorization': token,
            
        },
        body: JSON.stringify({...data})

    })

    let result = await res.json()

    return result

}

const like = (albumId,likedUser,token) =>{

    return fetch(`${baseUrl}/albums/like/${albumId}`,{

        method: 'PATCH',
        headers: {

            'content-type': 'application/json',
            'X-authorization': token,

        },
        body: JSON.stringify(likedUser)

    })
    .then(res => res.json());

}

const dislike = (albumId,dislikedUser,token) =>{

    return fetch(`${baseUrl}/albums/dislike/${albumId}`,{

        method: 'PATCH',
        headers: {

            'content-type': 'application/json',
            'X-authorization': token,

        },
        body: JSON.stringify(dislikedUser)

    })
    .then(res => res.json());

}

const removeLike = (albumId,album,token) =>{

    return fetch(`${baseUrl}/albums/${albumId}`,{

        method: 'PATCH',
        headers: {

            'content-type': 'application/json',
            'X-authorization': token,

        },
        body: JSON.stringify(album)

    })
    .then(res => res.json());

}


const albumService = {

    getAll,
    getOne,
    create,
    deletePost,
    update,
    like,
    removeLike,
    dislike,

}

export default albumService;