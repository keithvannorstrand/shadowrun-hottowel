(function() {
  'use strict';

  angular.module('app.components.characterDisplay.items')
    .directive('srItemsDisplay', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      scope: {
        editable: '=?'
      },
      templateUrl: 'app/components/characterDisplay/items/items.html',
      controller: ItemsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  ItemsController.$inject = ['characterservice'];

  function ItemsController(characterservice){
    var vm = this;
    console.log(vm.editable);
    vm.editable = Boolean(vm.editable) || false;
    vm.items = characterservice.getItems();

    vm.deleteItem = function(index){
      vm.items.splice(index, 1);
      characterservice.setItems(vm.items);
    }
  }

})();
