var router = require('express').Router();
var four0four = require('../utils/404')();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Character = require('../models/character');
var skills = require('../data/skills');
var weapons = require('../data/weapons');
var ware = require('../data/ware');
var qualities = require('../data/qualities');


var types ={ware:{}};
types.weapons = weapons.map(function(weapon) {
  return weapon.type;
}).filter(function(type, index, array) {
  return array.indexOf(type)==index;
});

types.ware.cyberware = ware.cyberware.map(function(cur) {
  return cur.type;
}).filter(function(cur, index, array) {
  return array.indexOf(cur)==index;
});

types.ware.bioware = ware.bioware.map(function(cur) {
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

// FIXME: fix routes /:name and /:type are the same route

router.get('/items', getAllItems);
router.get('/items/weapons', getAllWeapons);
router.get('/items/weapons/name/:name', getNamedWeapon);
router.get('/items/weapons/type/:type', getTypedWeapons);
router.get('/items/ware/', getAllWare);
router.get('/items/cyberware', getAllCyberware);
router.get('/items/cyberware/name/:name', getNamedCyberware);
router.get('/items/cyberware/type/:type', getTypedCyberware);
router.get('/items/bioware', getAllBioware);
router.get('/items/bioware/name/:name', getNamedBioware);
router.get('/items/bioware/type/:type', getTypedBioware);
router.get('/skills', getAllSkills);
router.get('/skills/name/:name', getNamedSkill);
router.get('/skills/type/:type', getTypedSkills);
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

function getNamedWeapon(req, res) {
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

function getAllBioware(req, res) {
  res.json({
    data: ware.bioware,
    status: 200,
    message: 'Successful'
  });
}

function getNamedBioware(req, res) {
  var name = req.params.name;
  var output = ware.bioware.filter(function(cur){
    return cur.name == name;
  });

  if( output.length === 0 ){
    res.json({
      status: 404,
      message: 'Name not found among Bioware'
    });
  } else {
    res.json({
      status: 200,
      data: output,
      message: 'Success'
    });
  }
}

function getTypedBioware(req, res) {
  var type = req.params.type;

  if(types.ware.bioware.indexOf(type) === -1) {
    res.json({
      status: 404,
      message: 'Bioware type not found. Data contains available types',
      data: types.ware.bioware
    });
  }

  var output = ware.bioware.filter(function(cur) {
    return cur.type === type;
  });

  res.json({
    status: 200,
    message: 'Success',
    data: output
  });
}

function getAllCyberware(req, res) {
  res.json({
    data: ware.cyberware,
    status: 200,
    message: 'Successful'
  });
}

function getNamedCyberware(req, res) {
  var name = req.params.name;
  var output = ware.cyberware.filter(function(cur){
    return cur.name == name;
  });

  if( output.length === 0 ){
    res.json({
      status: 404,
      message: 'Name not found among Cyberware'
    });
  } else {
    res.json({
      status: 200,
      data: output,
      message: 'Success'
    });
  }
}

function getTypedCyberware(req, res) {
  var type = req.params.type;

  if(types.ware.cyberware.indexOf(type) === -1) {
    res.json({
      status: 404,
      message: 'Ware type not found. Data contains available types',
      data: types.ware
    });
  }

  var output = ware.cyberware.filter(function(cur) {
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
      message: 'Name not found among skills'
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
      data: types.skills
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
