(function() {
  'use strict';

  angular.module('app.components.priorityTable')
    .directive('srPriorityTable', priorityTableDirective);

  function priorityTableDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/priorityTable/priorityTable.html',
      scope: {},
      controller: PriorityTableController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  PriorityTableController.$inject = ['priorityservice', 'characterservice'];

  function PriorityTableController(priorityservice, characterservice){
    var vm = this;

    vm.setMagicPriority = setMagicPriority;
    vm.setAttributesPriority = setAttributesPriority;
    vm.setSkillsPriority = setSkillsPriority;
    vm.setResourcePriority = setResourcePriority;
    vm.setMetatypePriority = setMetatypePriority;

    function setMagicPriority(priority, cl){
      priorityservice.setMagic(priority, cl);
    }

    function setAttributesPriority(priority){
      priorityservice.setAttributes(priority);
      console.log('attribute priority', priority);
    }

    function setSkillsPriority(priority){
      priorityservice.setSkills(priority);
      console.log('skill priority', priority);
    }

    function setResourcePriority(priority){
      priorityservice.setResources(priority);
      console.log('resource priority', priority);
    }

    function setMetatypePriority(priority){
      priorityservice.setMetatype(priority);
      console.log('metatype priority', priority);
    }

  }
})();
