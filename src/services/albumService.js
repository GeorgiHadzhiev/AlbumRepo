const baseUrl = 'http://localhost:3030/data'

const getAll = async () => {

    let res = await fetch(`${baseUrl}/albums`)
    let albums = await res.json()

    let result = Object.values(albums)
    return result
    
}

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
        body: JSON.stringify(data)

    })

    let result = await res.json()

    return result

}


const albumService = {

    getAll,
    create,
    getOne,

}

export default albumService;