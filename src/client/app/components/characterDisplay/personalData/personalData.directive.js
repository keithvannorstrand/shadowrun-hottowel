(function() {
  'use strict';

  angular.module('app.components.characterDisplay.personalData')
    .directive('srPersonalDataDisplay', displayDirective);

  displayDirective.$inject = ['characterservice'];

  function displayDirective(characterservice){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/personalData/personalData.html',
      controller: DisplayController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {},
      link: function(scope, elem, attrs, ctrl){
        scope.$watch(function(){
          return characterservice.getPersonalData();
        }, function(){
          ctrl.personalData = characterservice.getPersonalData();
        }, true);
      }
    };
  }

  DisplayController.$inject = ['characterservice'];

  function DisplayController(characterservice){
    var vm = this;
    vm.personalData = characterservice.getPersonalData();
  }

})();
