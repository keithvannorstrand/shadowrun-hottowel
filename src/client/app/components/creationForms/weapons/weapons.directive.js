(function() {
  'use strict';

  angular.module('app.components.creationForms.weapons')
    .directive('srWeaponsForm', weaponsDirective);

  function weaponsDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/qualities/qualities.html',
      scope: {},
      controller: WeaponsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  WeaponsController.$inject = ['characterservice','httpservice'];

  function WeaponsController(characterservice, httpservice){

    var vm = this;

  }

})();
