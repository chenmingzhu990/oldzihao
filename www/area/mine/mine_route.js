angular.module('mine.route',['mine.controller','mine.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('tab.mine', {
           url: '/mine',
           views: {
             'tab-mine': {
               templateUrl: 'area/mine/mine.html',
               controller: 'mineCtrl'
             }
           }
        })
    });
