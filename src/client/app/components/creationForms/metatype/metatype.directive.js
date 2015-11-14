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

  MetatypeController.$inject = ['$scope', 'characterservice','priorityservice'];

  function MetatypeController($scope, characterservice, priorityservice){
    var vm = this;
    console.log(arguments);
    vm.metatypes = priorityservice.getMetatypes();
    vm.metatype = 'Human';
    vm.saveOnChange = function(){
      characterservice.setMetatype(vm.metatype.metatype);
      priorityservice.setSpecial(vm.metatype.limits);
    };
    $scope.$watch(function(){
      return priorityservice.getMetatypes();
    }, function(newValue){
      vm.metatypes = newValue;
    })
  }

  function metatypeLink(scope, elem, attrs, ctrl){
    scope.$watch(function(){
      return scope.vm.metatype;
    }, function(){
      ctrl.saveOnChange();
    }, true);
  }

})();
