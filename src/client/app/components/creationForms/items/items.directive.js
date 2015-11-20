(function() {
  'use strict';

  angular.module('app.components.creationForms.items')
    .directive('srItemsForm', itemsFormDirective);

  function itemsFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/items/items.html',
      scope: {},
      controller: ItemsFormController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  ItemsFormController.$inject = ['characterservice'];

  function ItemsFormController(characterservice){
    var vm = this;
    vm.items = characterservice.getItems();

    vm.addItem = function(){
      vm.items.push({
        item: vm.item,
        quantity: vm.quantity,
        cost: vm.cost
      });
      // characterservice.setItems(vm.items);
      vm.item = '';
      vm.quantity = 0;
      vm.cost = 0;
    };
  }

})();
