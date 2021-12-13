import * as request from './requester.js'

const baseUrl = 'http://localhost:3030/data'


const getAll = () => request.get(`${baseUrl}/albums`)
    
const getOne = async (albumId) => request.get(`${baseUrl}/albums/${albumId}`)

const getAllOwn =  async () => request.get('http://localhost:3030/myAlbums',undefined,true)

const create = async (albumData) => request.post(`${baseUrl}/albums`,albumData)

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

const update = async (albumId,albumData) => request.put(`${baseUrl}/albums/${albumId}`, albumData)


const like = async (albumId,likedUser,token) =>{

    let res = await fetch(`${baseUrl}/albums/like/${albumId}`,{

        method: 'PATCH',
        headers: {

            'content-type': 'application/json',
            'X-authorization': token,

        },
        body: JSON.stringify(likedUser)

    })
    let result = await res.json()

    if(res.ok){

        return result;

    }
    else{

        throw result.message;

    }

}

const dislike = async (albumId,dislikedUser,token) =>{

    let res = await fetch(`${baseUrl}/albums/dislike/${albumId}`,{

        method: 'PATCH',
        headers: {

            'content-type': 'application/json',
            'X-authorization': token,

        },
        body: JSON.stringify(dislikedUser)

    })
    let result = await res.json()

    if(res.ok){

        return result;

    }
    else{

        throw result.message;

    }
    

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
    getAllOwn,
    create,
    deletePost,
    update,
    like,
    removeLike,
    dislike,

}

export default albumService;