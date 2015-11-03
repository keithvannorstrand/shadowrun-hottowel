var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose-q')(require('mongoose'));
var User = require('../models/user');
var Character = require('../models/character');

// GET all of user's characters
router.get('/characters', function(req, res){
  var sessionID = req.session.passport.user;
  User.findById(sessionID)
    .populate('characters')
    .exec(function(err, user){
      if(err){
        console.log('Couldn\'t retrieve user\'s characters.');
        res.status(500);
        res.json({
          error: err,
          message: 'Couldn\'t retrieve user\'s characters.',
          code: 500
        });
      } else {
        console.log('users characters', user.characters);
        res.json(user.characters);
      }
    });
});

// save a user's new character to the database
router.post('/character', function(req, res){
  var sessionID = req.session.passport.user;
  var newCharacter = new Character(req.body);
  newCharacter.save();

  var query = sessionID;
  var update = {$push: {characters: newCharacter}};
  var options = {upsert: true, new: true};
  User.findByIdAndUpdateQ(query, update, options)
  .then(function(response){
    console.log('successfully added character to User');
    res.json(response);
  }).catch(function(err){
    res.status(500);
    res.json({
      error: err,
      message: 'User wasn\'t updated, Character isn\'t tied to User. Try again.'
    });
  }).done();
});

router.put('/character', function(req, res){
  var query = req.body._id;
  var update = req.body;
  var options = {upsert: true, new: true};
  Character.findByIdAndUpdateQ(query, update, options)
  .then(function(response){
    console.log('Character successfully updated');
    res.json(response);
  }).catch(function(error){
    console.log('Character update failed');
    res.status(500);
    res.json({
      error: error,
      message: 'Character update failed.'
    });
  }).done();
});

module.exports = router;
