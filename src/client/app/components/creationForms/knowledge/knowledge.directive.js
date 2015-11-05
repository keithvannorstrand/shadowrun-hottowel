(function() {
  'use strict';

  angular.module('app.components.creationForms.knowledge')
    .directive('srKnowledgeForm', knowledgeDirective);

  function knowledgeDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/knowledge/knowledge.html',
      controller: KnowledgeController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {}
    };
  }

  KnowledgeController.$inject = ['characterservice'];

  function KnowledgeController(characterservice){
    var vm = this;
    vm.knowledgeArray = [];


    vm.addKnowledge = function() {
      vm.knowledgeArray.push({
        skill: vm.skill,
        rank: vm.rank
      });
      characterservice.setKnowledge(vm.knowledgeArray);
      vm.skill = '';
      vm.rank = 0;
    };

  }

})();
