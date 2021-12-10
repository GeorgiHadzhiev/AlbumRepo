const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10

const userSchema = new mongoose.Schema({

    firstName:{

        type: String

    },
    lastName:{

        type: String

    },
    email:{

        type: String

    },
    password:{

        type: String

    }

});

userSchema.pre('save', function(next){

    return bcrypt.hash(this.password,SALT_ROUNDS)
        .then((hash) => {
             
            this.password = hash;

            return next();
        });

});

userSchema.method('validatePassword', function(password){ // we can validate the password here, though idk if I'd do it that way in the future

    return bcrypt.compare(password,this.password) // returns a boolian promise

});


const User = mongoose.model('User', userSchema);

module.exports = User;