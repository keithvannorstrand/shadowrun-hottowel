(function() {
  'use strict';

  angular.module('app.components.characterDisplay.attributes')
    .directive('srAttributesDisplay', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/attributes/attributes.html',
      controller: AttributesController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  AttributesController.$inject = ['characterservice'];

  function AttributesController(characterservice){
    var vm = this;
    vm.attributes = characterservice.getAttributes();
  }

})();
