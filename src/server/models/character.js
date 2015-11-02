var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema({
  class: String,
  personalData: {
    alias: String,
    age: Number,
    metatype: String,
    ethnicity: String,
    sex: String,
    height: Number,
    weight: Number,
    notoriety: Number,
    streetCred: Number,
    publicAwareness: Number
  },
  attributes: {
    body: Number,
    strength: Number,
    agility: Number,
    reaction: Number,
    intuition: Number,
    charisma: Number,
    wisdom: Number,
    logic: Number,
    will: Number,
    magic: Number,
    resonance: Number,
    edge: Number
  },
  activeSkills: [{
    skill: String,
    rank: Number,
    group: Boolean
  }],
  qualities: [{
    quality: String
  }],
  items: [{
    item: String,
    quantity: Number,
    cost: Number
  }],
  knowledge: [{
    skill: String,
    rank: Number
  }]
});

module.exports = mongoose.model('characters', characterSchema);
