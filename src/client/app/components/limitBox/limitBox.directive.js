(function() {
  'use strict';

  angular.module('app.components.limitBox')
    .directive('srLimitBox', limitBoxDirective);

  function limitBoxDirective() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/limitBox/limitBox.html',
      controller: BoxController,
      controllerAs: 'vm',
      bindToController: true,
      link: boxLink
    };
  }

  BoxController.$inject = ['characterservice', 'priorityservice'];

  function BoxController(characterservice, priorityservice) {
    var vm = this;

    vm.character = characterservice.getCharacter();
    vm.limits = priorityservice.getLimits();
  }

  function boxLink(scope, elem, attrs, vm) {
    scope.$watch(function() {
      return vm.character.attributes;
    }, function() {
      vm.limits.attributes.spent = attributesSpent(vm);
      vm.limits.attributes.specSpent = specialSpent(vm);
    }, true);
    scope.$watch(function() {
      return vm.character.skills;
    }, function() {
      if(vm.character.skills.length) {
        vm.limits.skills.single.spent = vm.character.skills.reduce(function(prev, cur) {
          var type = cur.type.toLowerCase();
          if(type != 'knowledge' && type != 'group') {
            if(cur.specialization)
            {
              return prev + cur.rank + 1;
            }
            return prev + cur.rank;
          }
          return prev;
        }, 0);
        vm.limits.skills.group.spent = vm.character.skills.reduce(function(prev, cur) {
          var type = cur.type.toLowerCase();
          if(type == 'group') {
            return prev + cur.rank;
          }
          return prev;
        }, 0);
      } else {
        vm.limits.skills.single.spent = 0;
        vm.limits.skills.group.spent = 0;
      }
    }, true);
    scope.$watch(function() {
      return vm.character.items;
    }, function() {
      var types = Object.keys(vm.character.items);
      vm.limits.resource.spent = 0;
      types.forEach(function(type){
        vm.limits.resource.spent += vm.character.items[type].reduce(function(prev, item){
          if(item.quantity){
            return prev + item.quantity * item.cost;
          }
          return prev + item.cost;
        }, 0)
      });
    }, true)
  }

  function specialSpent(vm) {
    return (vm.character.attributes.magic - vm.limits.attributes.min.magic
      + vm.character.attributes.resonance - vm.limits.attributes.min.resonance
      + vm.character.attributes.edge - vm.limits.attributes.min.edge) || 0;
  }

  function attributesSpent(vm) {
    return (vm.character.attributes.body - vm.limits.attributes.min.body
      + vm.character.attributes.strength - vm.limits.attributes.min.strength
      + vm.character.attributes.reaction - vm.limits.attributes.min.reaction
      + vm.character.attributes.agility - vm.limits.attributes.min.agility
      + vm.character.attributes.charisma - vm.limits.attributes.min.charisma
      + vm.character.attributes.intuition - vm.limits.attributes.min.intuition
      + vm.character.attributes.logic - vm.limits.attributes.min.logic
      + vm.character.attributes.will - vm.limits.attributes.min.will) || 0;
  }

})();
