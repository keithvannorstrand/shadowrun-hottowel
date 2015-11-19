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
    vm.types = ['Active', 'Knowledge', 'Magic'];
    vm.group = false;

    vm.activate = activate;
    vm.addSkill = addSkill;

    function activate(){
      httpservice.getSkills()
        .then(function(response){
          vm.skills = response.data;
          console.log('skills', vm.skills);
        })
    }

    function addSkill(){
      console.log('skill',vm.skill);
      // vm.skills.push({
      //   skill: vm.skill,
      //   rank: vm.rank,
      //   group: vm.group
      // });
      // characterservice.setSkills(vm.skills);
      // vm.skill = '';
      // vm.rank = 0;
      // vm.group = false;
    };
  }

})();
