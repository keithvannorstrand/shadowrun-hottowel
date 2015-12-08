var router = require('express').Router();
var four0four = require('../utils/404')();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Character = require('../models/character');
var skills = require('../data/skills');
var weapons = require('../data/weapons');
var ware = require('../data/ware');
var qualities = require('../data/qualities');


var types ={};
types.weapons = weapons.map(function(weapon) {
  return weapon.type;
}).filter(function(type, index, array) {
  return array.indexOf(type)==index;
});

types.ware = ware.map(function(cur) {
  return cur.type;
}).filter(function(cur, index, array) {
  return array.indexOf(cur)==index;
});

types.skills = skills.map(function(cur) {
  return cur.type;
}).filter(function(cur, index, array) {
  return array.indexOf(cur)==index;
});
// outfacing api routes

router.get('/items', getAllItems);
router.get('/items/weapons', getAllWeapons);
router.get('/items/weapons/:name', getNamedWeapon);
router.get('/items/weapons/:type', getTypedWeapons);
router.get('/items/ware/', getAllWare);
router.get('/items/ware/:name', getNamedWare);
router.get('/items/ware/:type', getTypedWare);
router.get('/skills', getAllSkills);
router.get('/skills/:name', getNamedSkill);
router.get('/skills/:type', getTypedSkills);
router.get('/characters', getAllCharacters);
router.get('/*', four0four.notFoundMiddleware);
module.exports = router;

function getAllItems(req, res) {
  var obj = {
    ware: ware,
    weapons: weapons
  };
  res.json(obj);
}

function getAllWeapons(req, res) {
  res.json({
    data: weapons,
    status: 200,
    message: 'Successful'
  });
}

function getNamedWeapons(req, res) {
  var name = req.params.name;
  var output = weapons.filter(function(cur){
    return cur.name == name;
  });

  if( output.length === 0 ){
    res.json({
      status: 404,
      message: 'Name not found among weapons'
    });
  } else {
    res.json({
      status: 200,
      data: output,
      message: 'Success'
    });
  }
}

function getTypedWeapons(req, res) {
  var type = req.params.type;

  if(types.weapons.indexOf(type) === -1) {
    res.json({
      status: 404,
      message: 'Weapon type not found. Data contains available types',
      data: types
    });
  }

  var output = weapons.filter(function(weapon) {
    return weapon.type === type;
  });

  res.json({
    status: 200,
    message: 'Success',
    data: output
  });
}

function getAllWare(req, res) {
  res.json({
    data: ware,
    status: 200,
    message: 'Successful'
  });
}

function getNamedWare(req, res) {
  var name = req.params.name;
  var output = ware.filter(function(cur){
    return cur.name == name;
  });

  if( output.length === 0 ){
    res.json({
      status: 404,
      message: 'Name not found among ware'
    });
  } else {
    res.json({
      status: 200,
      data: output,
      message: 'Success'
    });
  }
}

function getTypedWare(req, res) {
  var type = req.params.type;

  if(types.ware.indexOf(type) === -1) {
    res.json({
      status: 404,
      message: 'Ware type not found. Data contains available types',
      data: types
    });
  }

  var output = ware.filter(function(cur) {
    return cur.type === type;
  });

  res.json({
    status: 200,
    message: 'Success',
    data: output
  });
}

function getAllSkills(req, res) {
  res.json({
    status: 200,
    data: skills,
    message: 'Success'
  });
}

function getNamedSkill(req, res) {
  var name = req.params.name;
  var output = skills.filter(function(cur){
    return cur.name == name;
  });

  if( output.length === 0 ){
    res.json({
      status: 404,
      message: 'Name not found among ware'
    });
  } else {
    res.json({
      status: 200,
      data: output,
      message: 'Success'
    });
  }
}

function getTypedSkills(req, res) {
  var type = req.params.type;

  if(types.skills.indexOf(type) === -1) {
    res.json({
      status: 404,
      message: 'Skill type not found. Data contains available types',
      data: types
    });
  }

  var output = skills.filter(function(cur) {
    return cur.type === type;
  });

  res.json({
    status: 200,
    message: 'Success',
    data: output
  });
}

function getAllCharacters(req, res) {
  Character.findQ().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json({
      code: 500,
      error: err,
      message: 'There was an error in the database retrieving all characters'
    });
  }).done();
}
