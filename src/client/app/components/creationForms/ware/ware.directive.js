(function() {
  'use strict';

  angular.module('app.components.creationForms.ware')
    .directive('srWareForm', wareDirective);

  function wareDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/creationForms/ware/ware.html',
      controller: WareController,
      controllerAs: 'vm',
      bindToController: true,
      link: linkFn
    };
  }

  WareController.$inject = ['characterservice', 'priorityservice', 'httpservice'];

  function WareController(characterservice, priorityservice, httpservice) {
    var vm = this;

    activate();

    vm.addWare = addWare;

    function activate() {
      httpservice.getWare()
        .then(function(response) {
          vm.types={};
          vm.allWares = response.data;
          console.log('allWares',vm.allWares);
          vm.types.cyberware = vm.allWares.cyberware.map(function(ware) {
            return ware.type;
          }).filter(function(type, index, array) {
            return array.indexOf(type)==index;
          });
          vm.types.bioware = vm.allWares.bioware.map(function(ware) {
            return ware.type;
          }).filter(function(type, index, array) {
            return array.indexOf(type)==index;
          });
          console.log('types', vm.types);
        });
      vm.wares = characterservice.getWare();
      vm.limit = priorityservice.getResources();
    }

    function addWare(){
      console.log(vm.ware);
    }
  }

  function linkFn(scope, elem, attrs, vm){
    scope.$watch(function(){
      return vm.wares;
    }, function(){
      // FIXME: needs to sum up ALL items not just cyberware
    })
  }

})();
