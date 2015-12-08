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
      bindToController: true
    };
  }

  WareController.$inject = ['characterservice', 'priorityservice', 'httpservice'];

  function WareController(characterservice, priorityservice, httpservice) {

    var vm = this;
    vm.grades = ['Standard','Alphaware','Betaware','Deltaware','Used'];
    vm.wares = characterservice.getWare();
    vm.limit = priorityservice.getResources();

    activate();

    vm.addWare = addWare;


    function activate() {
      httpservice.getWare()
        .then(function(response) {
          vm.types={};
          vm.allWares = response.data;
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
        });
    }

    function addWare(){
      var cyberware = {};
      if(vm.ware.ratings){
        cyberware = {
          type: vm.ware.type,
          name: vm.ware.name
        };
        angular.merge(cyberware, vm.rating);
      } else {
        cyberware = vm.ware;
      }
      gradeCyberware(vm.grade, cyberware);
      vm.wares.push(cyberware);
    }
  }

  // ** Helper Functions ** //

  function gradeCyberware(grade, cyberware){
    switch(grade){
      case 'Alphaware':
        cyberware.cost *= 1.2;
        cyberware.avail += 2;
        cyberware.essence *= 0.8;
        break;
      case 'Betaware':
        cyberware.cost *= 1.5;
        cyberware.avail += 4;
        cyberware.essence *= 0.7;
        break;
      case 'Deltaware':
        cyberware.cost *= 1.5;
        cyberware.avail += 8;
        cyberware.essence *= 0.5;
        break;
      case 'Used':
        cyberware.cost *= 0.75;
        cyberware.avail -= 4;
        cyberware.essence *= 1.25;
        break;
    }
  }

})();
