(function() {
  'use strict';

  angular.module('app.components.slideContainer')
    .directive('srSlideContainer', slideContainerDirective);

  function slideContainerDirective(){
    return {
      restrict: 'EA',
      transclude: true,
      templateUrl: 'app/components/slideContainer/slideContainer.html',
      scope: {
        title: '@'
      },
      controller: SlideContainerController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function SlideContainerController(){
    var vm = this;
    vm.id=vm.title.replace(' ','');
    vm.toggleId = '#'+vm.id;
    console.log('vm.id', vm.id);
    console.log('vm.toggleId', vm.toggleId);
  }
}());
