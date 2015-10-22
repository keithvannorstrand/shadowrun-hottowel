(function() {
  'use strict';

  angular.module('app.components.slideContainer')
    .directive('srSlideContainer', slideContainerDirective);

  function slideContainerDirective(){
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/slideContainer/slideContainer.html',
      scope: {},
      controller: SlideContainerController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function SlideContainerController(){
    var vm = this;
  }
}());
