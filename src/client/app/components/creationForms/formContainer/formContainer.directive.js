(function() {
  'use strict';

  angular.module('app.components.creationForms.formContainer')
    .directive('srFormContainer', formContainerDirective);

  function formContainerDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/formContainer/formContainer.html'
    };
  }

})();
