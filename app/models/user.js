var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = moongoose.Schema({

    local : {
        email : String,
        password : String
    },

    facebook : {
        id : String,
        token : String,
        name : String,
        email : String
    },

    twitter : {
        id : String,
        token : String,
        displayName : String,
        username : String
    }

    google : {
        id : String,
        token : String,
        email : String,
        name : String
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);