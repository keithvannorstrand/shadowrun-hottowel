(function() {
  'use strict';

  angular.module('app.components.saveCharacter')
    .directive('srSaveCharacter', saveCharacterDirective);

  function saveCharacterDirective(){
    return {
      restrict: 'A',
      scope: {},
      controller: SaveController,
      controllerAs: 'vm',
      bindToController: true,
      link: saveLink
    };
  }

  SaveController.$inject = ['characterservice', 'httpservice', 'priorityservice'];

  function SaveController(characterservice, httpservice, priorityservice){
    var vm = this;

    vm.save = function(){
      var character = characterservice.getCharacter();
      character.limits = priorityservice.getLimits();
      console.log('CHARACTER', character);
      httpservice.postCharacter(character);
    };
  }

  function saveLink(scope, elem, attrs, ctrl){
    elem.on('click', function(){
      ctrl.save();
    });
  }

})();
