angular.module('home.route',['home.controller','home.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('tab.home', {
           url: '/home',
           views: {
             'tab-home': {
               templateUrl: 'area/home/home.html',
               controller: 'homeCtrl'
             }
           }
        })
    });
