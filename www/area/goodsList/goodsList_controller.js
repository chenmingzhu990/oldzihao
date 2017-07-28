angular.module('goodsList.controller',['goodsList.service'])

    .controller('goodsListCtrl',function($scope){

        $scope.$on('$ionicView.enter', function (e) {
          getCategoryData();
          $scope.getCategoryDetailData(101);
        });


        function getCategoryData(){
          $scope.categoryData=[
            {
              name:"热门推荐",
              typeNumber:'101'
            },
            {
              name:"工艺品",
              typeNumber:'102'
            },
            {
              name:"装扮",
              typeNumber:'103'
            },
            {
              name:"家居",
              typeNumber:'104'
            },
            {
              name:"文房",
              typeNumber:'105'
            },
            {
              name:"美食",
              typeNumber:'106'
            },
            {
              name:"滋补",
              typeNumber:'107'
            },
            {
              name:"调味",
              typeNumber:'108'
            },
            {
              name:"茶",
              typeNumber:'109'
            },
            {
              name:"酒",
              typeNumber:'110'
            }
            // ,
            // {
            //   name:"居家生活",
            //   typeNumber:'111'
            // },
            // {
            //   name:"家具建材",
            //   typeNumber:'112'
            // },
            // {
            //   name:"热门推荐",
            //   typeNumber:'101'
            // },
            // {
            //   name:"居家生活",
            //   typeNumber:'101'
            // },
            // {
            //   name:"居家生活",
            //   typeNumber:'101'
            // },
            // {
            //   name:"居家生活",
            //   typeNumber:'101'
            // },
            // {
            //   name:"居家生活",
            //   typeNumber:'101'
            // },
            // {
            //   name:"居家生活",
            //   typeNumber:'101'
            // },
            // {
            //   name:"居家生活",
            //   typeNumber:'101'
            // },{
            //   name:"居家生活",
            //   typeNumber:'101'
            // }
          ];

        }

        
        $scope.getCategoryDetailData=function(typeNumber){

          if(typeNumber==101){
            $scope.categoryDetailData=[
              {
                name:"臻选",
                src:"img/goodsList/goodsList_001.jpg",
                typeNumber:'10001'
              },
              {
                name:"送礼",
                src:"img/goodsList/goodsList_002.jpg",
                typeNumber:'10002'
              },
              {
                name:"独家",
                src:"img/goodsList/goodsList_003.jpg",
                typeNumber:'10003'
              },
              {
                name:"美食",
                src:"img/goodsList/goodsList_004.jpg",
                typeNumber:'10004'
              },
              {
                name:"滋补",
                src:"img/goodsList/goodsList_005.jpg",
                typeNumber:'10005'
              },
              {
                name:"茶",
                src:"img/goodsList/goodsList_006.jpg",
                typeNumber:'10006'
              },
              {
                name:"酒",
                src:"img/goodsList/goodsList_007.jpg",
                typeNumber:'10007'
              },
              {
                name:"居家",
                src:"img/goodsList/goodsList_008.jpg",
                typeNumber:'10008'
              },
              {
                name:"调味",
                src:"img/goodsList/goodsList_009.jpg",
                typeNumber:'10009'
              }
            
            ];

          }else if(typeNumber==102) {

            $scope.categoryDetailData=[
              {
                name:"漆器",
                src:"img/goodsList/goodsList_010.jpg",
                typeNumber:'10001'
              },
              {
                name:"景泰蓝",
                src:"img/goodsList/goodsList_011.jpg",
                typeNumber:'10002'
              },
              {
                name:"翡翠玉器",
                src:"img/goodsList/goodsList_012.jpg",
                typeNumber:'10003'
              },
              {
                name:"瓷器",
                src:"img/goodsList/goodsList_013.jpg",
                typeNumber:'10004'
              },
              {
                name:"刀剑",
                src:"img/goodsList/goodsList_014.jpg",
                typeNumber:'10005'
              },
              {
                name:"字画",
                src:"img/goodsList/goodsList_015.jpg",
                typeNumber:'10006'
              },
              {
                name:"伞扇",
                src:"img/goodsList/goodsList_016.jpg",
                typeNumber:'10007'
              },
              {
                name:"鼻烟壶",
                src:"img/goodsList/goodsList_017.jpg",
                typeNumber:'10008'
              }
            
            ];

            }else if(typeNumber==103) {

            $scope.categoryDetailData=[
              {
                name:"美容护肤",
                src:"img/goodsList/goodsList_018.jpg",
                typeNumber:'10001'
              },
              {
                name:"珠宝首饰",
                src:"img/goodsList/goodsList_019.jpg",
                typeNumber:'10002'
              },
              {
                name:"丝绸制品",
                src:"img/goodsList/goodsList_020.jpg",
                typeNumber:'10003'
              },
              {
                name:"旗袍唐装",
                src:"img/goodsList/goodsList_021.jpg",
                typeNumber:'10004'
              },
              {
                name:"鞋",
                src:"img/goodsList/goodsList_022.jpg",
                typeNumber:'10005'
              }
            
            ];

            }else if(typeNumber==104) {

            $scope.categoryDetailData=[
              {
                name:"钟",
                src:"img/goodsList/goodsList_023.jpg",
                typeNumber:'10001'
              },
              {
                name:"家具",
                src:"img/goodsList/goodsList_024.jpg",
                typeNumber:'10002'
              },
              {
                name:"首饰盒",
                src:"img/goodsList/goodsList_025.jpg",
                typeNumber:'10003'
              },
              {
                name:"餐具",
                src:"img/goodsList/goodsList_026.jpg",
                typeNumber:'10004'
              },
              {
                name:"厨具",
                src:"img/goodsList/goodsList_027.jpg",
                typeNumber:'10005'
              },
              {
                name:"自行车",
                src:"img/goodsList/goodsList_028.jpg",
                typeNumber:'10006'
              },
              {
                name:"家纺",
                src:"img/goodsList/goodsList_029.jpg",
                typeNumber:'10007'
              }
            
            ];
            }else if(typeNumber==105) {

            $scope.categoryDetailData=[
              {
                name:"笔",
                src:"img/goodsList/goodsList_030.jpg",
                typeNumber:'10001'
              },
              {
                name:"墨",
                src:"img/goodsList/goodsList_031.jpg",
                typeNumber:'10002'
              },
              {
                name:"纸",
                src:"img/goodsList/goodsList_032.jpg",
                typeNumber:'10003'
              },
              {
                name:"砚",
                src:"img/goodsList/goodsList_033.jpg",
                typeNumber:'10004'
              },
              {
                name:"颜料",
                src:"img/goodsList/goodsList_034.jpg",
                typeNumber:'10005'
              },
              {
                name:"镇纸邳",
                src:"img/goodsList/goodsList_035.jpg",
                typeNumber:'10006'
              }
            ];

            }else if(typeNumber==106) {

            $scope.categoryDetailData=[
              {
                name:"糕饼",
                src:"img/goodsList/goodsList_036.jpg",
                typeNumber:'10001'
              },
              {
                name:"坚果炒货",
                src:"img/goodsList/goodsList_037.jpg",
                typeNumber:'10002'
              },
              {
                name:"糖果蜜饯",
                src:"img/goodsList/goodsList_038.jpg",
                typeNumber:'10003'
              },
              {
                name:"冲泡饮品",
                src:"img/goodsList/goodsList_039.jpg",
                typeNumber:'10004'
              },
              {
                name:"肉制品",
                src:"img/goodsList/goodsList_040.jpg",
                typeNumber:'10005'
              },
              {
                name:"豆制品",
                src:"img/goodsList/goodsList_041.jpg",
                typeNumber:'10006'
              },
              {
                name:"粽子",
                src:"img/goodsList/goodsList_042.jpg",
                typeNumber:'10007'
              },
              {
                name:"主食",
                src:"img/goodsList/goodsList_043.jpg",
                typeNumber:'10008'
              },
              {
                name:"礼盒",
                src:"img/goodsList/goodsList_044.jpg",
                typeNumber:'10008'
              }
            
            ];

            }else if(typeNumber==107) {

            $scope.categoryDetailData=[
              {
                name:"膏品",
                src:"img/goodsList/goodsList_045.jpg",
                typeNumber:'10001'
              },
              {
                name:"参茸",
                src:"img/goodsList/goodsList_046.jpg",
                typeNumber:'10002'
              },
              {
                name:"阿胶",
                src:"img/goodsList/goodsList_047.jpg",
                typeNumber:'10003'
              },
              {
                name:"燕窝",
                src:"img/goodsList/goodsList_048.jpg",
                typeNumber:'10004'
              },
              {
                name:"铁皮石斛",
                src:"img/goodsList/goodsList_049.jpg",
                typeNumber:'10005'
              },
              {
                name:"虫草",
                src:"img/goodsList/goodsList_050.jpg",
                typeNumber:'10006'
              },
              {
                name:"枸杞",
                src:"img/goodsList/goodsList_051.jpg",
                typeNumber:'10007'
              },
              {
                name:"红枣",
                src:"img/goodsList/goodsList_052.jpg",
                typeNumber:'10008'
              },
              {
                name:"茯苓",
                src:"img/goodsList/goodsList_053.jpg",
                typeNumber:'10008'
              },
              {
                name:"灵芝",
                src:"img/goodsList/goodsList_054.jpg",
                typeNumber:'10008'
              },
              {
                name:"礼盒",
                src:"img/goodsList/goodsList_055.jpg",
                typeNumber:'10008'
              }
            
            ];

            }else if(typeNumber==108) {

            $scope.categoryDetailData=[
              {
                name:"酱油",
                src:"img/goodsList/goodsList_056.jpg",
                typeNumber:'10001'
              },
              {
                name:"醋",
                src:"img/goodsList/goodsList_057.jpg",
                typeNumber:'10002'
              },
              {
                name:"调味酱",
                src:"img/goodsList/goodsList_058.jpg",
                typeNumber:'10003'
              },
              {
                name:"酱菜",
                src:"img/goodsList/goodsList_059.jpg",
                typeNumber:'10004'
              },
              {
                name:"礼盒",
                src:"img/goodsList/goodsList_060.jpg",
                typeNumber:'10005'
              }
            
            ];

            }else if(typeNumber==109) {

            $scope.categoryDetailData=[
              {
                name:"绿茶",
                src:"img/goodsList/goodsList_061.jpg",
                typeNumber:'10001'
              },
              {
                name:"红茶",
                src:"img/goodsList/goodsList_062.jpg",
                typeNumber:'10002'
              },
              {
                name:"花草茶",
                src:"img/goodsList/goodsList_063.jpg",
                typeNumber:'10003'
              },
              {
                name:"普洱茶",
                src:"img/goodsList/goodsList_064.jpg",
                typeNumber:'10004'
              },
              {
                name:"乌龙茶",
                src:"img/goodsList/goodsList_065.jpg",
                typeNumber:'10005'
              },
              {
                name:"茶具",
                src:"img/goodsList/goodsList_066.jpg",
                typeNumber:'10006'
              },
              {
                name:"礼盒",
                src:"img/goodsList/goodsList_067.jpg",
                typeNumber:'10007'
              }
            
            ];

          }else{
            $scope.categoryDetailData=[
              {
                name:"白酒",
                src:"img/goodsList/goodsList_068.jpg",
                typeNumber:'10013'
              },
              {
                name:"黄酒",
                src:"img/goodsList/goodsList_069.jpg",
                typeNumber:'10014'
              },
              {
                name:"葡萄酒",
                src:"img/goodsList/goodsList_070.jpg",
                typeNumber:'10015'
              },
              {
                name:"保健酒",
                src:"img/goodsList/goodsList_071.jpg",
                typeNumber:'10016'
              },

              {
                name:"啤酒",
                src:"img/goodsList/goodsList_072.jpg",
                typeNumber:'10017'
              },
              {
                name:"果子酒",
                src:"img/goodsList/goodsList_073.jpg",
                typeNumber:'10018'
              }
            ];
          }
        };


        // 左侧分类单击样式修改
        $scope.categoryLeftClick=function(e){
          // console.log(e);
          e.target.className='nav-current';
          $(e.target).siblings().removeClass().addClass('nav-blur');
        };


    })