(function() {
  'use strict';

  angular.module('app.components.characterDisplay.items')
    .directive('srItemsDisplay', displayDirective);

  displayDirective.$inject = ['characterservice'];

  function displayDirective(characterservice){
    return {
      restrict: 'E',
      scope: {
        editable: '@?'
      },
      templateUrl: 'app/components/characterDisplay/items/items.html',
      controller: ItemsController,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, elem, attrs, ctrl){
        scope.$watch(function(){
          return characterservice.getItems();
        }, function(){
          ctrl.items = characterservice.getItems();
        });
      }
    };
  }

  ItemsController.$inject = ['characterservice'];

  function ItemsController(characterservice){
    var vm = this;
    vm.editable = Boolean(vm.editable) || false;
    vm.items = characterservice.getItems();

    vm.deleteItem = function(index){
      vm.items.splice(index, 1);
      characterservice.setItems(vm.items);
    }
  }

})();
