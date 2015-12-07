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

  MetatypeController.$inject = ['$scope', 'characterservice','priorityservice'];

  function MetatypeController($scope, characterservice, priorityservice){
    var vm = this;
    vm.metatypes = priorityservice.getMetatypes();
    vm.metatype = {metatype: 'Human', limit: 0};
    $scope.$watch(function() {
      return vm.metatype;
    }, function() {
      console.log(vm.metatypes);
      characterservice.setMetatype(vm.metatype.metatype);
      priorityservice.setAttributeLimits(vm.metatype)
    }, true);
  }

})();
