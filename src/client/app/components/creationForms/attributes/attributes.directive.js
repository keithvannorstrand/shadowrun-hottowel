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
      // link: attributesLink,
      controllerAs: 'vm',
      bindToController: true
    };
  }


  function AttributesController(){
    var vm = this;

  }

  // attributesLink.$inject = ['characterservice'];
  //
  // function attributesLink(scope, element, attributes, characterservice){
  //   scope.$watch(function(){
  //     return attributes.ngModel;
  //   }, function(newVal, oldVal){
  //     // characterservice.setAttributes(scope.attributes);
  //     console.log('HELLO');
  //   }, true);
  // }

})();
