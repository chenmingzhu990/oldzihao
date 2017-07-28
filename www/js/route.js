angular.module('route',['tabs.route','guidePage.route','home.route','find.route','made.route','word.route','mine.route','goodsList.route','login.route','history.route'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  // if none of the above states are matched, use this as the fallback
  
  // 默认一开始页面
  $urlRouterProvider.otherwise('/guidePage');

});