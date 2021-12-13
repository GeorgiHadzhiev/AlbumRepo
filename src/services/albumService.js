import * as request from './requester.js'

const baseUrl = 'http://localhost:3030'

const getAll = () => request.get(`${baseUrl}/data/albums`);
    
const getOne = async (albumId) => request.get(`${baseUrl}/data/albums/${albumId}`);

const getAllOwn =  async () => request.get(`${baseUrl}/myAlbums`,undefined,true);

const create = async (albumData) => request.post(`${baseUrl}/data/albums`,albumData);

const deletePost = async (albumId) => request.deletePost(`${baseUrl}/data/albums/${albumId}`);

const update = async (albumId,albumData) => request.put(`${baseUrl}/data/albums/${albumId}`, albumData);

const like = async (albumId,userData) => request.patch(`${baseUrl}/data/albums/like/${albumId}`,userData);

const dislike = async (albumId,userData) => request.patch(`${baseUrl}/data/albums/dislike/${albumId}`,userData);


const albumService = {

    getAll,
    getOne,
    getAllOwn,
    create,
    deletePost,
    update,
    like,
    dislike,

}

export default albumService;