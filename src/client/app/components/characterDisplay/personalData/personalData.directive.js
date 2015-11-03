(function() {
  'use strict';

  angular.module('app.components.characterDisplay.personalData')
    .directive('srPersonalDataDisplay', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/personalData/personalData.html',
      controller: DisplayController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  DisplayController.$inject = ['characterservice'];

  function DisplayController(characterservice){
    var vm = this;
    vm.personalData = characterservice.getPersonalData();
  }

})();
