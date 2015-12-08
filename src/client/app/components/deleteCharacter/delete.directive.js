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

  DeleteController.$inject = ['characterservice', 'httpservice','priorityservice'];

  function DeleteController(characterservice, httpservice, priorityservice){
    var vm = this;

    vm.delete = function(){
      var character = characterservice.getCharacter();
      // httpservice.deleteCharacter(character);
      characterservice.reset();
      priorityservice.reset();
    };
  }

  function deleteLink(scope, elem, attrs, ctrl){
    elem.on('click', function(){
      ctrl.delete();
      console.log('DELETE');
    });
  }

})();
