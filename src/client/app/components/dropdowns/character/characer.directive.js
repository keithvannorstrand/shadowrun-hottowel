(function() {
  'use strict';

  angular.module('app.components.dropdowns.character')
    .directive('srCharacterDropdown', dropdownDirective);

  dropdownDirective.$inject = ['characterservice'];

  function dropdownDirective(characterservice) {
    return {
      restrict: 'AE',
      templateUrl: 'app/components/dropdowns/character/character.html',
      scope: {},
      controller: DropdownController,
      controllerAs: 'vm',
      bindToController: true,
      link: linkFn
    };
  }

  DropdownController.$inject = ['characterservice', 'httpservice', 'priorityservice'];

  function DropdownController(characterservice, httpservice, priorityservice){
    var vm = this;
    vm.character = {};

    vm.onChange = onChange;
    activate();
    function activate(){
      httpservice.getCharacters()
      .then(function(response){
        vm.characters = response.data;
        console.log('successfully got all characters', response);
      }).catch(function(error){
        console.log('failed to get all characters', error);
      });
    }

    function onChange(){
      characterservice.setCharacter(vm.character);
      priorityservice.setLimits(vm.character.limits);
    }
  }

  function linkFn(scope, elem, attrs, ctrl){
    scope.$watch(function(){
      return ctrl.character;
    }, function(){
      ctrl.onChange();
    });
  }

})();
