(function() {
  'use strict';

  angular.module('app.components.highlight')
    .directive('srHighlight', highlightDirective);

  function highlightDirective(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        var highlight=false;
        elem.bind('click', function(){
          if(!highlight){
            elem.css('background', attrs.srHighlight);
          } else {
            elem.css('background', '');
          }
          highlight = !highlight;
        });
      }
    };
  }
})();
