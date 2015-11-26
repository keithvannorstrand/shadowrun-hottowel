(function() {
  'use strict';

  angular.module('app.components.creationForms.attributes')
    .directive('srAttributesForm', attributesFormDirective);

  function attributesFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/attributes/attributes.html',
      scope: {},
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
