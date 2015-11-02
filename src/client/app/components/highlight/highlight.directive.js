(function() {
  'use strict';

  angular.module('app.components.highlight')
    .directive('srHighlight', highlightDirective);

  function highlightDirective(){
    var highlight=false;
    return {
      restrict: 'A',
      link: function(scope, elem, attr){
        elem.bind('click', function(){
          if(!highlight){
            elem.css('background', 'aqua');
          } else {
            elem.css('background', '');
          }
          highlight = !highlight;
        });
      }
    };
  }
})();
