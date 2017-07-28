angular.module('find.route',['find.controller','find.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('tab.find', {
           url: '/find',
           views: {
             'tab-find': {
               templateUrl: 'area/find/find.html',
               controller: 'findCtrl'
             }
           }
        })
    });
