angular.module('made.route',['made.controller','made.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('tab.made', {
           url: '/made',
           views: {
             'tab-made': {
               templateUrl: 'area/made/made.html',
               controller: 'madeCtrl'
             }
           }
        })
    });
