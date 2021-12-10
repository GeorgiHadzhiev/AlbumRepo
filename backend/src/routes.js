const router = require('express').Router();

const userController = require('./controllers/userController.js');
const albumController = require('./controllers/albumController.js');

router.use('/users', userController);
router.use('/data/albums', albumController);
router.use('/MyAlbums', albumController)


module.exports = router;