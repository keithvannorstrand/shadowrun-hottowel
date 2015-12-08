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
    skills: [
      {
        name: String,
        attribute: String,
        type: {type: String}
      }
    ]
  }],
  qualities: [String],
  items: {
    ware: [
      {
        type: {type: String},
        name: String,
        rating: String,
        essence: Number,
        capacity: String,
        avail: Number,
        illegality: String,
        cost: Number
      }
    ],
    weapons: [
      {
        type: {type: String},
        name: String,
        skill: String,
        accuracy: String,
        reach: String,
        range: [String],
        damage: String,
        ap: String,
        mode: String,
        rc: String,
        ammo: String,
        avail: Number,
        illegality: String,
        cost: Number,
        conceal: String,
        blast: String,
        quantity: Number
      }
    ]
  },
  limits: {
    metatypes: [
      {
        metatype: String,
        limit: Number
      }
    ],
    attributes: {
      spent: Number,
      total: Number,
      specSpent: Number,
      special: Number,
      min: {
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
      max: {
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
      }
    },
    skills: {
      single: {
        total: Number,
        spent: Number
      },
      group: {
        total: Number,
        spent: Number
      }
    },
    resource: {
      spent: Number,
      total: Number
    }
  }
});

module.exports = mongoose.model('characters', characterSchema);
