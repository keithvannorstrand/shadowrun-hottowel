(function() {
  'use strict';

  angular.module('app.components.characterDisplay.skills')
    .directive('srSkillsDisplay', displayDirective);

  displayDirective.$inject = ['characterservice'];

  function displayDirective(characterservice){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/skills/skills.html',
      scope: {},
      controller: SkillsController,
      controllerAs: 'vm',
      bindToController: true,
      // need to break out link function and somehow inject characterservice
      // couldn't get link.$inject = ['characterservice'] to inject
      link: function (scope, elem, attrs, ctrl){
        scope.$watch(function(){
          return characterservice.getSkills();
        }, function(newVal){
          ctrl.skills = characterservice.getSkills();
        });
      }
    };
  }

  SkillsController.$inject = ['characterservice'];

  function SkillsController(characterservice){
    console.log(arguments);
    var vm = this;

    vm.skills = characterservice.getSkills();
  }

})();
