(function() {
  'use strict';

  angular.module('app.features.characters')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'characters',
      config: {
        url: '/',
        templateUrl: 'app/features/characters/characters.html',
        // controller: 'HomeController',
        // controllerAs: 'vm',
        title: 'characters',
        settings: {
          nav: 2,
          content: 'Characters'
        }
      }
    }];
  }
}());
