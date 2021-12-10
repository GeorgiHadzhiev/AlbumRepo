import {request} from './requester.js'

const baseUrl = 'http://localhost:3030/data'


const getAll = () => request(`${baseUrl}/albums`)
    

const getOne = async (id) => {

    let res = await fetch(`${baseUrl}/albums/${id}`)
    let album = await res.json();

    return album

}

const getAllOwn =  async (authToken) => {

    let res = await fetch('http://localhost:3030/myAlbums', {

        headers:{

            'content-type': 'application/json',
            'X-Authorization': authToken,
            
        }


    })

    let result = await res.json();
    return result

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