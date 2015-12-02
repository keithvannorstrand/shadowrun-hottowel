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
    publicAwareness: Number,
    runSpeed: Number,
    walkSpeed: Number,
    composure: Number,
    judgeIntentions: Number,
    memory: Number
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
  skills: [{
    name: String,
    attribute: String,
    type: {type: String},
    group: String,
    default: Boolean,
    specialization: String,
    rank: Number,
    skills: [{
      name: String,
      attribute: String,
      type: {type: String},
      group: String
    }]
  }],
  qualities: [{
    quality: String
  }],
  items: [{
    item: String,
    quantity: Number,
    cost: Number
  }]
});

module.exports = mongoose.model('characters', characterSchema);
