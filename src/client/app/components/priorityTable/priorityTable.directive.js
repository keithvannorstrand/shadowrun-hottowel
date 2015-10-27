(function() {
  'use strict';

  angular.module('app.components.priorityTable')
    .directive('srPriorityTable', priorityTableDirective);

  function priorityTableDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/priorityTable/priorityTable.html',
      scope: {},
      controller: PriorityTableController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function PriorityTableController(){
    var vm = this;

  }
})();
