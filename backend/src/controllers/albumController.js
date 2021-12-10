const router = require('express').Router();
const Album = require('../models/Album.js');


const albumService = require('../services/albumService.js');

router.get('/', async (req, res) => {

    if(req.baseUrl === '/myAlbums'){

        let myAlbums = await albumService.getOwn(req.user._id);
        res.json(myAlbums)

    }
    else{

        let albums = await albumService.getAll();
    
        res.json(albums);

    }
    

})

router.post('/', async (req, res) => {
    
    console.log(req.body)
    let albumData = req.body
    await albumService.create({...albumData,_ownerId: req.user._id});

    res.json({ok: true})

})

router.get('/:albumId', async (req,res) =>{

    let album = await albumService.getOne(req.params.albumId);

    res.json(album);

})

router.put('/:albumId', async (req, res) => {

    let album = req.body;
    let albumId = req.params.albumId
    
    await albumService.update(albumId,album)

    res.json({ok: true});

})

router.patch('/like/:albumId', async (req, res) => {
    
    let body = Object.values(req.body)
    let albumId = req.params.albumId
    let album = await Album.findById(albumId)
    
    if(album.dislikes.includes(body[0])){

        album.dislikes = album.dislikes.filter(x => x !== body[0] )

    }
    if(album.likes.includes(body[0])){

        album.likes = album.likes.filter(x => x !== body[0] )
        await album.save()

        return res.json({ok: true})

    }


    
    album.likes.unshift(body[0])
    await album.save()

    res.json({ok: true});


})

router.patch('/dislike/:albumId', async (req, res) => {
    
    let body = Object.values(req.body)
    let albumId = req.params.albumId
    let album = await Album.findById(albumId)

    if(album.likes.includes(body[0])){

        album.likes = album.likes.filter(x => x !== body[0] )

    }
    if(album.dislikes.includes(body[0])){

        album.dislikes = album.dislikes.filter(x => x !== body[0] )
        await album.save()

        return res.json({ok: true})
 
     }


    album.dislikes.unshift(body[0])
    await album.save()

    res.json({ok: true});


})

router.delete('/:albumId', async (req, res) => {
    
    let albumId = req.params.albumId;

    await albumService.delete(albumId)

    res.json({ok: true})

})


module.exports = router;