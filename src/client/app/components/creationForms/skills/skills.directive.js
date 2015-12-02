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
    vm.types = ['Active', 'Social', 'Technical', 'Resonance', 'Magic', 'Vehicle', 'Knowledge', 'Group'];
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

  function linkFn(scope, elem, attrs, vm){
    scope.$watch(function(){
      return vm.skills;
    }, function(){
      if(vm.skills.length){
        vm.single = vm.skills.reduce(function(prev, cur){
          var type = cur.type.toLowerCase();
          if(type != 'knowledge' && type != 'group'){
            if(cur.specialization)
            {
              return prev + cur.rank + 1;
            }
            return prev + cur.rank;
          }
          return prev;
        }, 0);
        vm.group = vm.skills.reduce(function(prev, cur){
          var type = cur.type.toLowerCase();
          if(type == 'group'){
            return prev + cur.rank;
          }
          return prev;
        }, 0);
      } else {
        vm.single = 0;
        vm.group = 0;
      }
    }, true)
  }

})();
