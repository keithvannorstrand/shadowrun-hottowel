var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var User = require('../models/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
