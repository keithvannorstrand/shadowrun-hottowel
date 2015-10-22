(function() {
  'use strict';
  angular.module('app.components.featureContainer')
    .directive('srFeatureContainer', featureContainerDirective);

  function featureContainerDirective(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'app/components/featureContainer/featureContainer.html'
    }
  }
}());
