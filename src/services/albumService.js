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
        body: JSON.stringify({...data,likes: [],dislikes: []})

    })

    let result = await res.json()

    return result

}

const like = (albumId,album,token) =>{

    return fetch(`${baseUrl}/albums/${albumId}`,{

        method: 'PUT',
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

}

export default albumService;