(function() {
  'use strict';

  angular.module('app.components.characterDisplay.knowledge')
    .directive('srKnowledgeDisplay', displayDirective);

  displayDirective.$inject = ['characterservice'];

  function displayDirective(characterservice){
    return {
      restrict: 'E',
      templateUrl: 'app/components/characterDisplay/knowledge/knowledge.html',
      scope: {
        editable: '@'
      },
      controller: KnowledgeController,
      controllerAs: 'vm',
      bindToController: true,
      link: function(scope, elem, attrs, ctrl){
        scope.$watch(function(){
          return characterservice.getKnowledge();
        }, function(){
          ctrl.knowledge = characterservice.getKnowledge();
        });
      }
    };
  }

  KnowledgeController.$inject = ['characterservice'];

  function KnowledgeController(characterservice){
    var vm = this;

    vm.editable = Boolean(vm.editable) || false;
    console.log('editable', vm.editable);
    vm.knowledge = characterservice.getKnowledge();

    vm.deleteKnowledge = function(index){
      vm.knowledge.splice(index, 1);
      characterservice.setKnowledge(vm.knowledge);
    };
  }

})();
