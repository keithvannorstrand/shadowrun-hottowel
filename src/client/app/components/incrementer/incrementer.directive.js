(function() {
  'use strict';

  angular.module('app.components.incrementer')
    .directive('srIncrementer', incrementerDirective);

  function incrementerDirective(){
    return {
      restrict: 'A',
      scope:{
        srIncrementer: '='
      },
      link: link,
      templateUrl: 'app/components/incrementer/incrementer.html'
    };
  }

  function link(scope, elem, attrs, ctrl){
    elem.css('display', 'inline');
    $(elem.children()[0]).bind('click', function(){
      scope.srIncrementer++;
      console.log(scope.srIncrementer);
    });
    $(elem.children()[1]).bind('click', function(){
      scope.srIncrementer--;
      console.log(scope.srIncrementer);
    });
  }

})();
