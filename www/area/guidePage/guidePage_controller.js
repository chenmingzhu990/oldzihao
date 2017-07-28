angular.module('guidePage.controller',['guidePage.service'])

    .controller('guidePageCtrl',function($scope,$state){

        var guideSlide = new Swiper('#guideSlide', {

              pagination: '.swiper-pagination',
       });


        $scope.toHome = function(){
          $state.go('tab.home');
        }

    });