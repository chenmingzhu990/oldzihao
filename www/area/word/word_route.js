angular.module('word.route',['word.controller','word.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('tab.word', {
           url: '/word',
           views: {
             'tab-word': {
               templateUrl: 'area/word/word.html',
               controller: 'wordCtrl'
             }
           }
        })
    });
