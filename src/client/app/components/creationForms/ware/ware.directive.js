(function() {
  'use strict';

  angular.module('app.components.creationForms.ware')
    .directive('srWareForm', wareDirective);

  function wareDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/characterDisplay/ware/ware.html',
      controller: WareController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  WareController.$inject = ['characterservice', 'prioriyservice', 'httpservice'];

  function WareController() {

  }


})();
