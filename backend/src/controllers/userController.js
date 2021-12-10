const router = require('express').Router();
const userService = require('../services/userService.js')

router.post('/register' , async (req, res) => {

    let {firstName,lastName,email,password} = req.body;

    try{

        let user = await userService.register({firstName,lastName,email,password});
        let {userData,token} = await userService.login({email,password})
    
        res.json({
            
            _id: user._id,
            email: user.email,
            accessToken: token,
    
        })

    }
    catch(err){

        res.json({

            type: 'error',
            message: 'Something went wrong in the userController'

        })

    }


})

router.post('/login', async (req, res) => {
 
    let {email,password} = req.body;

    try{

        let {user,token} = await userService.login({email,password})
        res.json({
    
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            accessToken: token,
    
        });


    }
    catch(err){

        res.status(401).json({message: 'Email or password didn\'t match'})

    }


})

router.get('/logout', async (req, res) => {
    
    res.json({ok: true});

})

module.exports = router;