(function() {
  'use strict';

  angular.module('app.components.characterDisplay.qualities')
    .directive('srQualitiesDisplay', displayDirective);

  displayDirective.$inject = ['characterservice'];

  function displayDirective(characterservice){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/qualities/qualities.html',
      scope: {
        editable: '@?'
      },
      controller: QualityController,
      controllerAs: 'vm',
      bindToController: true,
    }
  }

  QualityController.$inject = ['characterservice'];

  function QualityController(characterservice){
    var vm = this;
    vm.editable = Boolean(vm.editable) || false;
    vm.qualities = characterservice.getQualities();

    vm.deleteQuality = function(index){
      if(vm.editable){
        vm.qualities.splice(index, 1);
      }
    };
  }

})();
