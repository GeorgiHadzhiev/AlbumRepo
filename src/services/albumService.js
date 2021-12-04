const baseUrl = 'http://localhost:3030/jsonstore'

const getAll = async () => {

    let res = await fetch(`${baseUrl}/albums`)
    let albums = await res.json()

    let result = Object.values(albums)
    return result
    
}


const albumService = {

    getAll,

}

export default albumService;