angular.module('login.route',['login.controller','login.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('login', {
           url: '/login',
           // views: {
           //   'login': {
               templateUrl: 'area/login/login.html',
               controller: 'loginCtrl'
           //   }
           // }
        })
    });
