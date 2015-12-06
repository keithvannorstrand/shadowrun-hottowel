(function() {
  'use strict';

  angular.module('app.components.limitBox')
    .directive('srLimitBox', limitBoxDirective);

  function limitBoxDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/limitBox/limitBox.html',
      controller: BoxController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  BoxController.$inject = ['characterservice', 'priorityservice'];

  function BoxController(characterservice, priorityservice){
    var vm = this;

    vm.character = characterservice.getCharacter();
    vm.limits = priorityservice.getLimits();
  }

})();
