angular.module('history.route',['history.controller','history.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('history', {
           url: '/history',
               templateUrl: 'area/history/history.html',
               controller: 'historyCtrl'
        })
    });
