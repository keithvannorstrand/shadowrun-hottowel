(function() {
  'use strict';

  angular.module('app.components.characterDisplay.characterSheet')
    .directive('srCharacterSheet', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/characterSheet/characterSheet.html',
      scope:{
        editable: '@?'
      },
      controller: CharacterController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function CharacterController(){
    var vm = this;
    console.log(vm.editable);
    vm.editable = Boolean(vm.editable) || false;
    console.log('sheet editable', vm.editable);
  }

})();
