(function() {
  'use strict';

  angular.module('app.components.creationForms.metatype')
    .directive('srMetatypeForm', metatypeDirective);

  function metatypeDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/metatype/metatype.html',
      scope: {},
      controller: MetatypeController,
      controllerAs: 'vm'
    };
  }

  function MetatypeController(){
    var vm = this;

    // get metatypes available from the priority table
  }

})();
