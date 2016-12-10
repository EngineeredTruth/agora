var app = angular.module('app',['ui.router','ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:'./views/home.html',
      })

    $stateProvider
      .state('buyers', {
        url:'/buyers',
        templateUrl:'./views/buyers.html',
      })
      .state('sellers', {
        url: '/sellers',
        templateUrl:'./views/sellers.html',
      })

      $urlRouterProvider.otherwise('/');

})
