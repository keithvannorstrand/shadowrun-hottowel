(function() {
  'use strict';

  angular.module('app.core.filters.type', [])
    .filter('typefilter', typeFilter);

    function typeFilter(){
      return function(input, type){
        var out = [];
        type = type || '';
        angular.forEach(input, function(value) {
          if(value.type.toLowerCase() === type.toLowerCase()){
            out.push(value);
          }
        });
        return out;
      }
    }

})();
