var router = require('express').Router();
var four0four = require('../utils/404')();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Character = require('../models/character');
var skills = require('../data/skills');
var weapons = require('../data/weapons');
var qualities = require('../data/qualities');
var ware = require('../data/ware');

// backend routes for data
router.get('/characters', getCharacters);
router.delete('/character/:id', deleteCharacter);
router.post('/character', postCharacter);
router.get('/skills', getSkills);
router.get('/skill/:name', getSkill);
router.get('/qualities', getQualities);
router.get('/items', getItems);
router.get('/weapons', getWeapons);
router.get('/ware', getWare);
router.get('/groups', getSkillGroups);
router.get('/*', four0four.notFoundMiddleware);
module.exports = router;

//////////////

function getCharacters(req, res){
  Character.findQ().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({
      code: 500,
      error: err,
      message: 'There was an error in the database retrieving all characters'
    });
  }).done();
};

function deleteCharacter(req, res){
  // FIXME:
  //  NEEDS TO BE AUTHENTICATED
  // person logged in has access
  // GM can delete any from the game that they are running?
  // admin(me) can delete any character
  Character.removeQ({_id: req.params.id})
  .then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({'message': err});
  }).done();
}

function postCharacter(req, res){
  var query={'personalData.alias': req.body.personalData.alias};
  var update = req.body;
  console.log(update);
  var options = {upsert: true};
  Character.findOneAndUpdateQ(query, update, options)
    .then(function(data){
      res.json(data);
    }).catch(function(err){
      res.json({
        code: 404,
        error: err,
        message: 'Character couldn\'t be saved'
      });
    }).done();
}

function getSkills(req, res){
  res.json(skills);
}

function getSkill(req, res){
  var name = req.params.name;
  res.send('temp');
}

function getQualities(req, res){
  res.json(qualities);
}

function getItems(req, res){
  var obj = {
    ware: ware,
    weapons: weapons
  };
  res.json(obj);
}

function getWeapons(req, res){
  res.json(weapons);
}

function getWare(req, res){
  res.json(ware);
}

function getSkillGroups(req, res){
  var skillGroups = {};
  skills.forEach(function(skill){
    if(skill.group!=='None'){
      if(skillGroups[skill.group]){
        skillGroups[skill.group].push(skill);
      } else {
        skillGroups[skill.group] = new Array(skill);
      }
    }
  });
  res.json(skillGroups);
}
