angular.module('guidePage.route',['guidePage.controller','guidePage.service'])

.config(function($stateProvider, $urlRouterProvider) {

 
  $stateProvider

  .state('guidePage', {
    url: '/guidePage',
    templateUrl: 'area/guidePage/guidePage.html',
    controller: 'guidePageCtrl'
  })

});