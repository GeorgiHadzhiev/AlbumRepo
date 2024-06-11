const jwt = require('jsonwebtoken');
const util = require('util');

// the whole point of this, is to make jwt have promises. 
// in this file, i initially import jwt, and then bellow i make it's certain functions become promisible

exports.sign = util.promisify(jwt.sign);
exports.verify = util.promisify(jwt.verify);