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

  SaveController.$inject = ['characterservice', 'dataservice'];

  function SaveController(characterservice, dataservice){
    var vm = this;

    vm.save = function(){
      var character = characterservice.getCharacter();
      dataservice.postCharacter(character);
    };
  }

  function saveLink(scope, elem, attrs, ctrl){
    elem.on('click', function(){
      ctrl.save();
    });
  }

})();
