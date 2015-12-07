(function() {
  'use strict';

  angular.module('app.components.characterDisplay.skills')
    .directive('srSkillsDisplay', displayDirective);

  function displayDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/skills/skills.html',
      scope: {
        editable: '=?'
      },
      controller: SkillsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  SkillsController.$inject = ['characterservice'];

  function SkillsController(characterservice){
    var vm = this;

    vm.editable = Boolean(vm.editable) || false;
    vm.skills = characterservice.getSkills();

    vm.deleteSkill = deleteSkill;

    function deleteSkill(skill){
      for (var i=0; i<vm.skills.length; i++){
        if (skill === vm.skills[i]){
          return vm.skills.splice(i, 1);
        }
      }
    }
  }

})();
