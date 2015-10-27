(function() {
  'use strict';

  angular.module('app.components.creationForms.qualities')
    .directive('srQualitiesForm', qualitiesDirective);

  function qualitiesDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/qualities/qualities.html'
    }
  }

})();
