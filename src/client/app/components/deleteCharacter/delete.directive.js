(function() {
  'use strict';

  angular.module('app.components.deleteCharacter')
    .directive('srDeleteCharacter', deleteDirective);

  function deleteDirective(){
    return {
      restrict: 'A',
      scope: {},
      controller: DeleteController,
      controllerAs: 'vm',
      bindToController: true,
      link: deleteLink
    };
  }

  DeleteController.$inject = ['characterservice', 'httpservice'];

  function DeleteController(characterservice, httpservice){
    var vm = this;

    vm.delete = function(){
      var character = characterservice.getCharacter();
      httpservice.deleteCharacter(character);
    };
  }

  function deleteLink(scope, elem, attrs, ctrl){
    elem.on('click', function(){
      ctrl.delete();
      console.log('DELETE');
    });
  }

})();
