(function() {
  'use strict';

  angular.module('app.components.creationForms.attributes')
    .directive('srAttributesForm', attributesFormDirective);

  function attributesFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/attributes/attributes.html',
      scope: {}
    }
  }
})();
