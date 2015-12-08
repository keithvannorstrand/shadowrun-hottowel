(function() {
  'use strict';

  angular.module('app.components.creationForms.attributes')
    .directive('srAttributesForm', attributesFormDirective);

  function attributesFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/attributes/attributes.html',
      scope: {},
      controller: AttributesController,
      controllerAs: 'vm',
      bindToController: true,
      link: attributesLink
    };
  }

  AttributesController.$inject = ['characterservice', 'priorityservice'];

  function AttributesController(characterservice, priorityservice){
    var vm = this;
    vm.attributes = characterservice.getAttributes();
    vm.personalData = characterservice.getPersonalData();
    vm.limits = priorityservice.getAttributes();
    vm.spent = 0;
    vm.special = 0;
  }

  function attributesLink(scope, elem, attrs, vm) {
    scope.$watch(function(){
      return vm.attributes;
    }, function() {
      if(vm.attributes.body > vm.limits.max.body){
        vm.attributes.body = vm.limits.max.body;
      }
      if(vm.attributes.body < vm.limits.min.body){
        vm.attributes.body = vm.limits.min.body;
      }

      if(vm.attributes.strength > vm.limits.max.strength){
        vm.attributes.strength = vm.limits.max.strength;
      }
      if(vm.attributes.strength < vm.limits.min.strength){
        vm.attributes.strength = vm.limits.min.strength;
      }

      if(vm.attributes.agility > vm.limits.max.agility){
        vm.attributes.agility = vm.limits.max.agility;
      }
      if(vm.attributes.agility < vm.limits.min.agility){
        vm.attributes.agility = vm.limits.min.agility;
      }

      if(vm.attributes.reaction > vm.limits.max.reaction){
        vm.attributes.reaction = vm.limits.max.reaction;
      }
      if(vm.attributes.reaction < vm.limits.min.reaction){
        vm.attributes.reaction = vm.limits.min.reaction;
      }

      if(vm.attributes.charisma > vm.limits.max.charisma){
        vm.attributes.charisma = vm.limits.max.charisma;
      }
      if(vm.attributes.charisma < vm.limits.min.charisma){
        vm.attributes.charisma = vm.limits.min.charisma;
      }

      if(vm.attributes.intuition > vm.limits.max.intuition){
        vm.attributes.intuition = vm.limits.max.intuition;
      }
      if(vm.attributes.intuition < vm.limits.min.intuition){
        vm.attributes.intuition = vm.limits.min.intuition;
      }

      if(vm.attributes.logic > vm.limits.max.logic){
        vm.attributes.logic = vm.limits.max.logic;
      }
      if(vm.attributes.logic < vm.limits.min.logic){
        vm.attributes.logic = vm.limits.min.logic;
      }

      if(vm.attributes.will > vm.limits.max.will){
        vm.attributes.will = vm.limits.max.will;
      }
      if(vm.attributes.will < vm.limits.min.will){
        vm.attributes.will = vm.limits.min.will;
      }

      if(vm.attributes.magic > vm.limits.max.magic){
        vm.attributes.magic = vm.limits.max.magic;
      }
      if(vm.attributes.magic < vm.limits.min.magic){
        vm.attributes.magic = vm.limits.min.magic;
      }

      if(vm.attributes.resonance > vm.limits.max.resonance){
        vm.attributes.resonance = vm.limits.max.resonance;
      }
      if(vm.attributes.resonance < vm.limits.min.resonance){
        vm.attributes.resonance = vm.limits.min.resonance;
      }

      if(vm.attributes.edge > vm.limits.max.edge){
        vm.attributes.edge = vm.limits.max.edge;
      }
      if(vm.attributes.edge < vm.limits.min.edge){
        vm.attributes.edge = vm.limits.min.edge;
      }

      vm.attributes.initiative = vm.attributes.intuition + vm.attributes.reaction;
      vm.attributes.astral = vm.attributes.intuition * 2;
      vm.attributes.matrix = vm.attributes.intuition + vm.attributes.reaction;
      vm.personalData.hitBox={
        physical: Math.ceil(vm.attributes.body/2) + 8,
        stun: Math.ceil(vm.attributes.will/2) + 8
      };
      vm.personalData.notoriety = vm.personalData.publicAwareness + vm.personalData.streetCred || 0;
      vm.personalData.composure = vm.attributes.charisma + vm.attributes.will;
      vm.personalData.memory = vm.attributes.logic + vm.attributes.will;
      vm.personalData.judgeIntentions = vm.attributes.charisma + vm.attributes.intuition;
      vm.personalData.walkSpeed = vm.attributes.agility*2;
      vm.personalData.runSpeed = vm.attributes.agility*4;
    }, true);
  }
})();
