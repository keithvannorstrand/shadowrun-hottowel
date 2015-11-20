(function() {
  'use strict';

  angular.module('app.core.services.character')
    .factory('characterservice', characterFactory);

  function characterFactory(){

    var character = {
      attributes: {
        body: 1,
        strength: 1,
        agility: 1,
        reaction: 1,
        charisma: 1,
        intuition: 1,
        logic: 1,
        will: 1,
        magic: 0,
        resonance: 0,
        edge: 1
      },
      personalData: {},
      items: [],
      skills: [],
      qualities: []
    };

    var factory = {
      setAttributes: setAttributes,
      setSkills: setSkills,
      setKnowledge: setKnowledge,
      setPersonalData: setPersonalData,
      setItems: setItems,
      setMetatype: setMetatype,
      setQualities: setQualities,
      setCharacter: setCharacter,
      setClass: setClass,
      getAttributes: getAttributes,
      getSkills: getSkills,
      getKnowledge: getKnowledge,
      getPersonalData: getPersonalData,
      getItems: getItems,
      getQualities: getQualities,
      getCharacter: getCharacter,
      getClass: getClass
    };

    return factory;


    // exported functions
    function setAttributes(attributes){
      if(attributes!=undefined){
        character.attributes = attributes;
        calcAttributes();
      }
    }

    function setSkills(skills){
      character.skills = skills;
    }

    function setKnowledge(knowledge){
      character.knowledge = knowledge;
    }

    function setPersonalData(data){
      character.personalData = data;

      character.personalData.notoriety =
        (character.personalData.streetCred + character.personalData.publicAwareness) || 0;
    }

    function setMetatype(metatype){
      character.personalData.metatype = metatype;
    }

    function setQualities(qualities){
      character.qualities = qualities;
    }

    function setItems(items){
      character.items = items;
    }

    function setCharacter(char){
      angular.merge(character, char);
    }

    function setClass(cl){
      character.class = cl;
    }

    function getAttributes(){
      return character.attributes;
    }

    function getSkills(){
      return character.skills;
    }

    function getKnowledge(){
      return character.knowledge;
    }

    function getPersonalData(){
      return character.personalData;
    }

    function getQualities(){
      return character.qualities;
    }

    function getItems(){
      return character.items;
    }

    function getCharacter(){
      return character;
    }

    function getClass(){
      return character.class;
    }

    // helper functions
    // calculates data that is dependent on attributes
    function calcAttributes(){
      character.personalData.composure =
        (character.attributes.charisma + character.attributes.will) || 0;
      character.personalData.judgeIntentions =
        (character.attributes.charisma + character.attributes.intuition) || 0;
      character.personalData.memory =
        (character.attributes.logic + character.attributes.will) || 0;
      character.personalData.walkSpeed =
        (character.attributes.agility * 2) || 0;
      character.personalData.runSpeed =
        (character.attributes.agility * 4) || 0;
      character.attributes.initiative =
        (character.attributes.reaction + character.attributes.intuition) || 0;
      character.attributes.astralInitiative =
        (character.attributes.intuition * 2) || 0;
    }
  }

})();
