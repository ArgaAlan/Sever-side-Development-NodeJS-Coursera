var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocalStrategy(User.authenticate())); //Passport-local-mongoose already has a function to auth but if you don't use it you must create a auth function
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());