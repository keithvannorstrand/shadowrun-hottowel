(function() {
  'use strict';

  angular.module('app.components.hoverbox')
    .directive('srHoverbox', hoverboxDirective);

    function hoverboxDirective(){
      return {
        restrict: 'E',
        templateUrl: 'app/components/hoverbox/hoverbox.html',
        scope: {},
        controller: HoverController,
        controllerAs: 'vm',
        bindToController: true,
        link: hoverLink
      };
    }

    function HoverController(){
      var vm = this;

    }

    function hoverLink(scope, elem, attrs, ctrl){

    }

})();
