(function() {
  'use strict';

  angular.module('app.core.services.character')
    .factory('characterservice', characterFactory);

  function characterFactory(){
    var character = {
      attributes: {},
      personalData: {}
    };
    var factory = {
      setAttributes: setAttributes,
      setSkills: setSkills,
      setKnowledge: setKnowledge,
      setPersonalData: setPersonalData,
      setItems: setItems,
      setMetatype: setMetatype,
      setQualities: setQualities,
      getAttributes: getAttributes,
      getSkills: getSkills,
      getKnowledge: getKnowledge,
      getPersonalData: getPersonalData,
      getItems: getItems,
      getQualities: getQualities,
      getCharacter: getCharacter
    };

    return factory;

    // exported functions
    function setAttributes(attributes){
      character.attributes = attributes;

      calcPersonalData();
      console.log('attributes', character.attributes);
    };

    function setSkills(skills){
      character.skills = skills;
      console.log('skills', character.skills);
    };

    function setKnowledge(knowledge){
      character.knowledge = knowledge;
      console.log('knowledge', character.knowledge);
    };

    function setPersonalData(data){
      character.personalData = data;

      calcPersonalData();
      console.log('personal data', character.personalData);
    };

    function setMetatype(metatype){
      character.personalData.metatype = metatype;
    };

    function setQualities(qualities){
      character.qualities = qualities;
      console.log('qualities', character.qualities);
    };

    function setItems(items){
      character.items = items;
      console.log('items', character.items);
    };

    function getAttributes(){
      return character.attributes;
    };

    function getSkills(){
      return character.skills;
    };

    function getKnowledge(){
      return character.knowledge;
    };

    function getPersonalData(){
      return character.personalData;
    };

    function getQualities(){
      return character.qualities;
    };

    function getItems(){
      return character.items;
    };

    function getCharacter(){
      return character;
    };

    // helper functions
    function calcPersonalData(){
      character.personalData.notoriety =
        (character.personalData.streetCred + character.personalData.publicAwareness) || 0;
      character.personalData.composure =
        (character.attributes.charisma + character.attributes.will) || 0;
      character.personalData.judgeIntentions =
        (character.attributes.charisma + character.attributes.intuition) || 0;
      character.personalData.memory =
        (character.attributes.logic + character.attributes.will) || 0;
      character.personalData.walkSpeed =
        (character.attributes.agility*2) || 0;
      character.personalData.runSpeed =
        (character.attributes.agility*4) || 0;
    }
  }

})();
