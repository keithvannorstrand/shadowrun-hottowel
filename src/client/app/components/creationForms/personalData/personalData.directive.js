(function() {
  'use strict';

  angular.module('app.components.creationForms.personalData')
    .directive('srPersonalDataForm', dataFormDirective);

  function dataFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/personalData/personalData.html',
      scope: {}
    };
  }

})();
