(function() {
  'use strict';

  angular.module('app.core.services.character')
    .factory('characterservice', characterFactory);

  function characterFactory(){
    var factory = {
      setAttributes: setAttributes
    };

    return factory;
    var character = {};

    function setAttributes(attributes){
      character.attributes = attributes;
      console.log(character.attributes);
    }

    function setSkills(skills){
      character.skills = skills;
    }

  }

})();
