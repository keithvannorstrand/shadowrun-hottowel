(function() {
  'use strict';

  angular.module('app.components.characterDisplay.weapons')
    .directive('srWeaponsDisplay', weaponsDirective);

  function weaponsDirective() {
    return {
      restrict: 'E',
      scope: {
        editable: '=?'
      },
      templateUrl: 'app/components/characterDisplay/weapons/weapons.html',
      controller: WeaponsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  WeaponsController.$inject = ['characterservice'];

  function WeaponsController(characterservice) {
    var vm = this;

    activate();

    vm.deleteWeapon = deleteWeapon;

    function activate(){
      vm.weapons = characterservice.getWeapons();
    }

    function deleteWeapon(index){
      vm.weapons.splice(index, 1);
    }
  }





})();
