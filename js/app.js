var app = angular.module('app',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:'./views/home.html',
      })

    $stateProvider
      .state('buyers', {
        url:'/buyers',
        templateUrl:'./views/buyer.html',
      })

      $urlRouterProvider.otherwise('/');

})
