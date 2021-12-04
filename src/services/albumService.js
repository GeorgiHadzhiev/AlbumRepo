const baseUrl = 'http://localhost:3030/jsonstore'

const getAll = () => {

    return fetch(`${baseUrl}/albums`)
            .then(res => res.json())

}


const albumService = {

    getAll,

}

export default albumService;