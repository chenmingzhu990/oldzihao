angular.module('tabs.route',[])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'area/tabs/tabs.html'
          })

    });
