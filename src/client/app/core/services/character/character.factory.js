(function() {
  'use strict';

  angular.module('app.core.services.character')
    .factory('characterservice', characterFactory);

  function characterFactory(){
    var character = {};
    var factory = {};

    factory.setAttributes = function(attributes){
      character.attributes = attributes;
      console.log('attributes', character.attributes);
    };

    factory.setSkills = function(skills){
      character.skills = skills;
      console.log('skills', character.skills);
    };

    factory.setKnowledge = function(knowledge){
      character.knowledge = knowledge;
      console.log('knowledge', character.knowledge);
    };

    factory.setPersonalData = function(data){
      character.personalData = data;
      console.log('personal data', character.personalData);
    };

    factory.setMetatype = function(metatype){
      character.metatype = metatype;
    };

    factory.setQualities = function(qualities){
      character.qualities = qualities;
      console.log('qualities', character.qualities);
    };

    factory.setItems = function(items){
      character.items = items;
      console.log('items', character.items);
    };

    factory.getAttributes = function(){
      return character.attributes;
    };

    factory.getSkills = function(){
      return character.skills;
    };

    factory.getKnowledge = function(){
      return character.knowledge;
    };

    factory.getPersonalData = function(){
      return character.personalData;
    };

    factory.getQualities = function(){
      return character.qualities;
    };

    factory.getItems = function(){
      return character.items;
    };

    return factory;

  }

})();
