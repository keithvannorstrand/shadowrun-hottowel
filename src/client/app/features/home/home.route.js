(function() {
  'use strict';

  angular.module('app.features.home')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'home',
      config: {
        url: '/',
        templateUrl: 'app/features/home/home.html',
        // controller: 'HomeController',
        // controllerAs: 'vm',
        title: 'home',
        settings: {
          nav: 1,
          content: 'Home'
        }
      }
    }];
  }
}());
