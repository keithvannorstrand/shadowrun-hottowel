(function() {
  'use strict';

  angular.module('app.components.creationForms.personalData')
    .directive('srPersonalDataForm', dataFormDirective);

  function dataFormDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/personalData/personalData.html',
      scope: {},
      controller: DataFormController,
      link: dataFormLink,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  DataFormController.$inject = ['characterservice'];

  function DataFormController(characterservice){
    var vm = this;
    vm.personalData = characterservice.getPersonalData();
    // vm.saveOnChange = function(){
    //   characterservice.setPersonalData(vm.personalData);
    // };
  }

  function dataFormLink(scope, elem, attrs, ctrl){
    // scope.$watch(function(){
    //   return scope.vm.personalData;
    // }, function(){
    //   ctrl.saveOnChange();
    // }, true);
  }

})();
