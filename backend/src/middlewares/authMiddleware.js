const jwt = require('../utils/jwt.js');
const {JWT_SECRET} = require('../constants.js')


exports.auth = async function(req,res,next){

    let token = req.headers['x-authorization']

    if(token){

        jwt.verify(token,JWT_SECRET)
        .then(decodedToken => {

            req.user = decodedToken;
            next();

        })
        .catch(err => {

            res.status(401).json('You are not authorsized');

        })

    }
    else{

        next()

    }
}

exports.isAuth = function(req,res,next){

    if(req.user){

        next()

    }
    else{

        res.status('401').json({message: 'You are not authorized'})

    }

}

exports.isGuest = function(req,res,next){

    if(!req.user){

        next()

    }
    else{
        
        res.redirect('/')

    }

}

