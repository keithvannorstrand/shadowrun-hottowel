(function() {
  'use strict';

  angular.module('app.components.characterDisplay.skills')
    .directive('srSkillsDisplay', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/skills/skills.html',
      scope: {
        editable: '@?'
      },
      controller: SkillsController,
      controllerAs: 'vm',
      bindToController: true
      // link: function (scope, elem, attrs, ctrl){
      //   scope.$watch(function(){
      //     return characterservice.getSkills();
      //   }, function(newVal){
      //     ctrl.skills = characterservice.getSkills();
      //   });
      // }
    };
  }

  SkillsController.$inject = ['characterservice'];

  function SkillsController(characterservice){
    var vm = this;

    vm.editable = Boolean(vm.editable) || false;
    vm.skills = characterservice.getSkills();

    vm.deleteSkill = function(index){
      vm.skills.splice(index, 1);
      // characterservice.setSkills(vm.skills);
    }
  }

})();
