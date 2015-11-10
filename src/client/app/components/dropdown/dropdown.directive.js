(function() {
  'use strict';

  angular.module('app.components.dropdown')
    .directive('srDropdown', dropdownDirective);

  dropdownDirective.$inject = ['characterservice'];

  function dropdownDirective(characterservice) {
    return {
      restrict: 'AE',
      templateUrl: 'app/components/dropdown/dropdown.html',
      scope: {},
      controller: DropdownController,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, elem, attrs, ctrl){
        scope.$watch(function(){
          return ctrl.character;
        }, function(){
          console.log('setting char');
          characterservice.setCharacter(ctrl.character);
        });
      }
    };
  }

  DropdownController.$inject = ['characterservice', 'httpservice'];

  function DropdownController(characterservice, httpservice){
    var vm = this;
    vm.character = {};

    httpservice.getCharacters()
    .then(function(response){
      vm.characters = response.data;
      console.log('successfully got all characters', response);
    }).catch(function(error){
      console.log('failed to get all characters', error);
    });
  }
  // get all characters
  // display in dropdown
  // update characterservice with selected character

})();
