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
        body: JSON.stringify({...data,likes: [],dislikes: []})

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


const albumService = {

    getAll,
    getOne,
    create,
    deletePost,

}

export default albumService;