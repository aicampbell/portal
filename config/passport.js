var localStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    })
}