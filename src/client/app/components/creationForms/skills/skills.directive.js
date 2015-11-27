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

  SkillsController.$inject = ['characterservice','httpservice'];

  function SkillsController(characterservice, httpservice){

    var vm = this;
    vm.types = ['Active', 'Social', 'Technical', 'Resonance', 'Magic', 'Vehicle', 'Knowledge'];
    vm.group = false;
    vm.skills = characterservice.getSkills();

    vm.activate = activate;
    vm.addSkill = addSkill;

    function activate(){
      httpservice.getSkills()
        .then(function(response){
          vm.allSkills = response.data;
        })
    }

    function addSkill(){
      vm.skill.specialization = vm.spec;
      vm.skill.rank = vm.rank;
      console.log('skill',vm.skill);
      vm.skills.push(vm.skill);
    };
  }

})();
