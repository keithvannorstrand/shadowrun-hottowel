(function() {
  'use strict';

  angular.module('app.components.creationForms.skills')
    .directive('srSkillsForm', skillsDirective);

  function skillsDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/skills/skills.html',
      scope: {},
      controller: SkillsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  SkillsController.$inject = ['characterservice'];

  function SkillsController(characterservice){

    var vm = this;
    vm.skills = [];
    vm.group = false;
    vm.addSkill = function(){
      vm.skills.push({
        skill: vm.skill,
        rank: vm.rank,
        group: vm.group
      });
      characterservice.setSkills(vm.skills);
      vm.skill = '';
      vm.rank = 0;
      vm.group = false;
    };
  }

})();
