const User = require('../models/User.js');
const jwt = require('../utils/jwt.js');
const {JWT_SECRET} = require('../constants.js');

exports.register = (userData) => {

    return User.create(userData);

}

exports.login = async ({email,password}) => {

    let user = await User.findOne({email});

    let isValid = await user.validatePassword(password)

    if(!isValid){

        throw new Error('Invalid Username or Password.')

    }

    let payload = {

        _id: user._id,
        email: user.email

    }

    if(user){

        let token = await jwt.sign(payload,JWT_SECRET);

        return {user,token}

    }
    else{

        throw new Error('No such user');

    }

}