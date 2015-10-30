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
      link: attributesLink,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  AttributesController.$inject = ['characterservice'];

  function AttributesController(characterservice){
    var vm = this;
    vm.attributes = {strength: 1};
    vm.saveOnChange = function(){
      characterservice.setAttributes(vm.attributes);
    }
  }


  function attributesLink(scope, element, attributes, ctrl){
    scope.$watch(function(){
      return scope.vm.attributes;
    }, function(newVal, oldVal){
      ctrl.saveOnChange();
    }, true);
  }

})();
