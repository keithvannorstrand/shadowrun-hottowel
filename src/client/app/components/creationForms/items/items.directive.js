(function() {
  'use strict';

  angular.module('app.components.creationForms.items')
    .directive('srItemsForm', itemsFormDirective);

  function itemsFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/items/items.html'
    };
  }

})();
