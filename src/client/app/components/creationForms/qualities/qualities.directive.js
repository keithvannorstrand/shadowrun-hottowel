(function() {
  'use strict';

  angular.module('app.components.creationForms.qualities')
    .directive('srQualitiesForm', qualitiesDirective);

  function qualitiesDirective(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/creationForms/qualities/qualities.html',
      scope: {},
      controller: QualitiesController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  QualitiesController.$inject = ['characterservice'];

  function QualitiesController(characterservice){

    var vm = this;
    vm.qualities = [];

    vm.addQuality = function(){
      vm.qualities.push(vm.quality);
      characterservice.setQualities(vm.qualities);
      vm.quality = '';
    };

  }

})();
