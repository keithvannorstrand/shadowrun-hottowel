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
      link: linkFn
    };
  }

  AttributesController.$inject = ['characterservice', 'priorityservice'];

  function AttributesController(characterservice, priorityservice){
    var vm = this;
    vm.attributes = characterservice.getAttributes();
    vm.limits = priorityservice.getAttributes();
    console.log(vm.limits);
  }

  function linkFn(scope, elem, attrs, ctrl){
    scope.$watch(function(){
      return ctrl.attributes;
    }, function(){

      if(ctrl.attributes.body > ctrl.limits.max.body){
        ctrl.attributes.body = ctrl.limits.max.body;
      }
      if(ctrl.attributes.body < ctrl.limits.min.body){
        ctrl.attributes.body = ctrl.limits.min.body;
      }

      if(ctrl.attributes.strength > ctrl.limits.max.strength){
        ctrl.attributes.strength = ctrl.limits.max.strength;
      }
      if(ctrl.attributes.strength < ctrl.limits.min.strength){
        ctrl.attributes.strength = ctrl.limits.min.strength;
      }

      if(ctrl.attributes.agility > ctrl.limits.max.agility){
        ctrl.attributes.agility = ctrl.limits.max.agility;
      }
      if(ctrl.attributes.agility < ctrl.limits.min.agility){
        ctrl.attributes.agility = ctrl.limits.min.agility;
      }

      if(ctrl.attributes.reaction > ctrl.limits.max.reaction){
        ctrl.attributes.reaction = ctrl.limits.max.reaction;
      }
      if(ctrl.attributes.reaction < ctrl.limits.min.reaction){
        ctrl.attributes.reaction = ctrl.limits.min.reaction;
      }

      if(ctrl.attributes.charisma > ctrl.limits.max.charisma){
        ctrl.attributes.charisma = ctrl.limits.max.charisma;
      }
      if(ctrl.attributes.charisma < ctrl.limits.min.charisma){
        ctrl.attributes.charisma = ctrl.limits.min.charisma;
      }

      if(ctrl.attributes.intuition > ctrl.limits.max.intuition){
        ctrl.attributes.intuition = ctrl.limits.max.intuition;
      }
      if(ctrl.attributes.intuition < ctrl.limits.min.intuition){
        ctrl.attributes.intuition = ctrl.limits.min.intuition;
      }

      if(ctrl.attributes.logic > ctrl.limits.max.logic){
        ctrl.attributes.logic = ctrl.limits.max.logic;
      }
      if(ctrl.attributes.logic < ctrl.limits.min.logic){
        ctrl.attributes.logic = ctrl.limits.min.logic;
      }

      if(ctrl.attributes.will > ctrl.limits.max.will){
        ctrl.attributes.will = ctrl.limits.max.will;
      }
      if(ctrl.attributes.will < ctrl.limits.min.will){
        ctrl.attributes.will = ctrl.limits.min.will;
      }

      if(ctrl.attributes.magic > ctrl.limits.max.magic){
        ctrl.attributes.magic = ctrl.limits.max.magic;
      }
      if(ctrl.attributes.magic < ctrl.limits.min.magic){
        ctrl.attributes.magic = ctrl.limits.min.magic;
      }

      if(ctrl.attributes.resonance > ctrl.limits.max.resonance){
        ctrl.attributes.resonance = ctrl.limits.max.resonance;
      }
      if(ctrl.attributes.resonance < ctrl.limits.min.resonance){
        ctrl.attributes.resonance = ctrl.limits.min.resonance;
      }

      if(ctrl.attributes.edge > ctrl.limits.max.edge){
        ctrl.attributes.edge = ctrl.limits.max.edge;
      }
      if(ctrl.attributes.edge < ctrl.limits.min.edge){
        ctrl.attributes.edge = ctrl.limits.min.edge;
      }
    }, true);
  }
})();
