(function() {
  'use strict';

  angular.module('app.components.characterDisplay.displayContainer')
    .directive('srDisplayContainer', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/displayContainer/displayContainer.html'
    };
  }

})();
