(function () {
  'use strict';

  angular
      .module('app.core.services.http')
      .factory('httpservice', httpservice);

  httpservice.$inject = ['$http'];
  /* @ngInject */
  function httpservice($http) {
    var factory = {
      postCharacter: postCharacter,
      getCharacters: getCharacters,
      deleteCharacter: deleteCharacter,
      getUserCharacters: getUserCharacters,
      saveUserCharacter: saveUserCharacter,
      updateUserCharacter: updateUserCharacter,
      getSkills: getSkills,
      getItems: getItems,
      getQualities: getQualities
    };

    return factory;


    // mostly for dev testing, should be using saveUserCharacter
    function postCharacter(character){
      console.log('hit post client side');
      return $http.post('/api/v1/character', character);
    }

    function getCharacters(){
      return $http.get('/api/v1/characters');
    }

    function deleteCharacter(id){
      return $http.delete('/api/v1/character/'+id);
    }

    function getUserCharacters(){
      return $http.get('/user/characters');
    }

    function saveUserCharacter(character){
      return $http.post('/user/character', character);
    }

    function updateUserCharacter(character){
      return $http.put('/user/character', character);
    }

    function getSkills() {
      $http.get('/api/v1/skills')
      .then(function(data){
        console.log('skills', data);
      });
    }

    function getQualities() {
      $http.get('/api/v1/qualities')
      .then(function(data){
        console.log('qualities', data);
      });
    }

    function getItems() {
      $http.get('/api/v1/items')
      .then(function(data){
        console.log('items', data);
      });
    }
  }
})();
