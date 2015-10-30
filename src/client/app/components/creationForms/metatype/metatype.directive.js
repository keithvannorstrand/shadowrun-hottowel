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
      controllerAs: 'vm',
      link: metatypeLink
    };
  }

  MetatypeController.$inject = ['characterservice']

  function MetatypeController(characterservice){
    var vm = this;
    // get metatypes available from the priority table
    vm.metatype = 'Human';
    vm.saveOnChange = function(){
      characterservice.setMetatype(vm.metatype);
    }
  }

  function metatypeLink(scope, elem, attrs, ctrl){
    scope.$watch(function(){
      return scope.vm.metatype;
    }, function(){
      ctrl.saveOnChange();
    }, true)
  }

})();
