angular.module('goodsList.route',['goodsList.controller','goodsList.service'])

    .config(function($stateProvider, $urlRouterProvider) {

     
        $stateProvider

          .state('goodsList', {
           url: '/goodsList',
               templateUrl: 'area/goodsList/goodsList.html',
               controller: 'goodsListCtrl'
        })
    });
