(function () {
  'use strict';

  angular
      .module('app.core.services.http')
      .factory('httpservice', httpservice);

  httpservice.$inject = ['$http'/*, '$q', 'exception', 'logger'*/];
  /* @ngInject */
  function httpservice($http/*, $q, exception, logger*/) {
    var service = {
      postCharacter: postCharacter,
      getCharacters: getCharacters,
      deleteCharacter: deleteCharacter,
      getUserCharacters: getUserCharacters,
      saveUserCharacter: saveUserCharacter,
      updateUserCharacter: updateUserCharacter
    };

    return service;

    function postCharacter(character){
      return $http.post('/create', character);
    }

    function getCharacters(){
      return $http.get('/create/all');
    }

    function deleteCharacter(id){
      return $http.delete('/create/delete/'+id);
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
  }
})();
