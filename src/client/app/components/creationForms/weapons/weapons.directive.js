(function() {
  'use strict';

  angular.module('app.components.creationForms.weapons')
    .directive('srWeaponsForm', weaponsDirective);

  function weaponsDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/weapons/weapons.html',
      scope: {},
      controller: WeaponsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  WeaponsController.$inject = ['characterservice','httpservice','priorityservice'];

  function WeaponsController(characterservice, httpservice, priorityservice) {
    // FIXME: need to deal with bow being based on rating

    var vm = this;
    vm.quantity = 1;

    activate();

    vm.addWeapon = addWeapon;

    function activate() {
      httpservice.getWeapons()
        .then(function(response) {
          vm.allWeapons = response.data;
          vm.types = vm.allWeapons.map(function(weapon) {
            return weapon.type;
          }).filter(function(type, index, array) {
            return array.indexOf(type)==index;
          });
        });
      vm.weapons = characterservice.getWeapons();
      vm.limit = priorityservice.getResources();
    }

    function addWeapon() {
      console.log(vm.quantity);
      vm.weapon.quantity = vm.quantity;
      vm.weapons.push(vm.weapon);
    }

  }

})();
