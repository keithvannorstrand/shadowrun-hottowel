(function () {
    'use strict';

    angular
        .module('app.core.services.data')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            postCharacter: postCharacter
        };

        return service;

        function postCharacter(character){
          console.log('hitting character post');
        }
    }
})();
