angular.module('word.controller',['word.service'])

    .controller('wordCtrl',function($scope){

        // 右侧
        $(function() {
            $("#famous ul li").each(function(index, el) {
                $(this).hover(function() {
                     $(this).addClass('active').siblings().removeClass('active');
                   
                    $('#word #link ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
                });
            });
        });

      

    })