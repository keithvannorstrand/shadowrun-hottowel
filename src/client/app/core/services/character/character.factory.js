(function() {
  'use strict';

  angular.module('app.core.services.character')
    .factory('characterservice', characterFactory);

  function characterFactory(){
    var character = {};
    return {
      setAttributes: function(attributes){
        character.attributes = attributes;
      },
      setSkills: function(skills){
        character.skills = skills;
      },
      setKnowledge: function(knowledge){
        character.knowledge = knowledge;
      },
      setPersonalData: function(data){
        character.personalData = personalData;
      },
      setQualities: function(qualities){
        character.qualities = qualities;
      },
      setItems: function(items){
        character.items = items;
      },
      getAttributes: function(){
        return character.attributes;
      },
      getSkills: function(){
        return character.skills;
      },
      getKnowledge: function(){
        return character.knowledge;
      },
      getPersonalData: function(){
        return character.personalData;
      },
      getQualities: function(){
        return character.qualities;
      },
      getItems: function(){
        return character.items;
      }
    };

  }

})();
