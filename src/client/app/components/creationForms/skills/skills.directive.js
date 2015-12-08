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

  SkillsController.$inject = ['characterservice', 'httpservice', 'priorityservice'];

  function SkillsController(characterservice, httpservice, priorityservice){

    var vm = this;
    vm.rank = 1;

    activate();
    vm.addSkill = addSkill;
    vm.addSkillGroup = addSkillGroup;

    function activate(){
      vm.limits = priorityservice.getSkills();
      vm.skills = characterservice.getSkills();
      httpservice.getSkills()
        .then(function(response){
          vm.allSkills = response.data;
          vm.types = vm.allSkills.map(function(skill) {
            return skill.type;
          }).filter(function(type, index, array) {
            return array.indexOf(type)==index;
          });
          vm.types.push('Group');
        });
      httpservice.getSkillGroups()
        .then(function(response){
          vm.skillGroups = response.data;
        });
    }

    function addSkill(){
      vm.skill.specialization = vm.spec;
      vm.skill.rank = vm.rank;
      vm.skills.push(vm.skill);
      vm.skill = {};
    }

    function addSkillGroup(){
      var skillGroup = {};
      skillGroup.skills = vm.skillGroups[vm.skillGroup];
      skillGroup.rank = vm.rank;
      skillGroup.type = 'Group';
      skillGroup.name = vm.skillGroup;
      vm.skills.push(skillGroup);
    }
  }

})();
