// FIXME: have vm.types get set based on the different types that come from allSkills
// FIXME: figure out setting up skill groups
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
      bindToController: true,
      link: linkFn
    };
  }

  SkillsController.$inject = ['characterservice', 'httpservice', 'priorityservice'];

  function SkillsController(characterservice, httpservice, priorityservice){

    var vm = this;
    vm.types = ['Active', 'Social', 'Technical', 'Resonance', 'Magic', 'Vehicle', 'Knowledge'];

    activate();
    vm.addSkill = addSkill;

    function activate(){
      vm.limits = priorityservice.getSkills();
      vm.skills = characterservice.getSkills();
      console.log(vm.skills);
      httpservice.getSkills()
        .then(function(response){
          vm.allSkills = response.data;
        });
    }

    function addSkill(){
      vm.skill.specialization = vm.spec;
      vm.skill.rank = vm.rank;
      vm.skills.push(vm.skill);
      console.log('skill',vm.skills);
    };
  }

  function linkFn(scope, elem, attrs, vm){
    scope.$watch(function(){
      return vm.skills;
    }, function(){
      if(vm.skills.length){
        vm.single = vm.skills.reduce(function(prev, cur){
          if(cur.type.toLowerCase() != 'knowledge'){
            return prev + cur.rank;
          }
        }, 0);
      } else {
        vm.single = 0;
      }
    }, true)
  }

})();
