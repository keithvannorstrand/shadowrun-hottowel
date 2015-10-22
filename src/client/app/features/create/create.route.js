(function() {
  'use strict';

  angular.module('app.features.create')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'create',
      config: {
        url: '/',
        templateUrl: 'app/features/create/create.html',
        // controller: 'CreateController',
        // controllerAs: 'vm',
        title: 'Create Character',
        settings: {
          nav: 3,
          content: 'Create Character'
        }
      }
    }];
  }
}());
