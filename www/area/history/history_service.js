angular.module('history.service',[])

    .factory('historyFty',function($http,$q){

        return {

             // 刷新列表商品列表
              refreshGoodsList: function (message) {
                var obj_goodsListData = [
                  {
                    messages: '工业时代里，仍旧留着有手工温度的一块酥糖',
                    text: '拜年不带酥糖，请君不要进厅堂',
                    pic: 'img/history/history_010.jpg',
                    img: 'img/history/history_012.jpg',
                    time: '2017-06-14',
                    word: "2",
                    view: '3k',
                  },{
                    messages: '夏日喝这些茶，解暑养眼两不误',
                    text: '一到夏天很多人会热衷喝茶解暑，大部分女性喜欢用花...',
                    pic: 'img/history/history_003.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-06-13',
                    word: "1",
                    view: '715',
                  },{
                    messages: '有了这把伞，你会爱上下雨天',
                    text: '满满文艺范儿的泸州油纸伞',
                    pic: 'img/home/home_001.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-06-09',
                    word: "0",
                    view: '3k',
                  },{
                    messages: '小满将至',
                    text: '中医注重天人合一，顺应自然而，知时而食。',
                    pic: 'img/history/history_011.jpg',
                    img: 'img/history/history_012.jpg',
                    time: '2017-05-19',
                    word: "1",
                    view: '2k',
                  },{
                    messages: '岁月带走时光，却带不走你的美',
                    text: '母亲节，送给妈妈最用心的礼物',
                    pic: 'img/history/history_006.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-11',
                    word: "3",
                    view: '3k',
                  },{
                   messages: '今日立夏',
                    text: '盛夏正式开始，好味凉食买起来~',
                    pic: 'img/history/history_007.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-08',
                    word: "0",
                    view: '3k',
                  },{
                    messages: '最原汁原味的端午，今年由我们来给你',
                    text: '上班不喝酒，白在世上走',
                    pic: 'img/history/history_008.jpg',
                    img: 'img/history/history_012.jpg',
                    time: '2017-05-07',
                    word: "0",
                    view: '3k',
                  },{
                   messages: '关于模具，我有个大胆的想法',
                    text: '「去体验」百年前的古法制作糕点~',
                    pic: 'img/history/history_009.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-04',
                    word: "7",
                    view: '189',
                  }

                ];

                var deferred = $q.defer();
                deferred.resolve(obj_goodsListData);
                return deferred.promise;
              },
              //下拉加载更多列表商品列表
              loadMoreGoodsList: function (message) {
                var obj_goodsListData = [
                    {
                    messages: '工业时代里，仍旧留着有手工温度的一块酥糖',
                    text: '拜年不带酥糖，请君不要进厅堂',
                    pic: 'img/history/history_010.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-06-14',
                    word: "2",
                    view: '3k',
                  },{
                    messages: '夏日喝这些茶，解暑养眼两不误',
                    text: '一到夏天很多人会热衷喝茶解暑，大部分女性喜欢用花...',
                    pic: 'img/history/history_003.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-06-13',
                    word: "1",
                    view: '715',
                  },{
                    messages: '有了这把伞，你会爱上下雨天',
                    text: '满满文艺范儿的泸州油纸伞',
                    pic: 'img/home/home_001.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-06-09',
                    word: "0",
                    view: '3k',
                  },{
                    messages: '小满将至',
                    text: '中医注重天人合一，顺应自然而，知时而食。',
                    pic: 'img/history/history_011.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-19',
                    word: "1",
                    view: '2k',
                  },{
                    messages: '岁月带走时光，却带不走你的美',
                    text: '母亲节，送给妈妈最用心的礼物',
                    pic: 'img/history/history_006.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-11',
                    word: "3",
                    view: '3k',
                  },{
                   messages: '今日立夏',
                    text: '盛夏正式开始，好味凉食买起来~',
                    pic: 'img/history/history_007.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-08',
                    word: "0",
                    view: '3k',
                  },{
                    messages: '最原汁原味的端午，今年由我们来给你',
                    text: '上班不喝酒，白在世上走',
                    pic: 'img/history/history_008.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-07',
                    word: "0",
                    view: '3k',
                  },{
                   messages: '关于模具，我有个大胆的想法',
                    text: '「去体验」百年前的古法制作糕点~',
                    pic: 'img/history/history_009.jpg',
                    img: 'img/home/home_036.jpg',
                    time: '2017-05-04',
                    word: "7",
                    view: '189',
                  }
                ];

                var deferred = $q.defer();
                deferred.resolve(obj_goodsListData);
                return deferred.promise;
               },
               testPromise:function(){

                console.log("5");
                // 首先要定义一个延迟对象
                var deferred = $q.defer();
                // 模拟异步请求访问
                setTimeout(function(){
                  console.log("6");
                  deferred.resolve("传播知识");
                },5000);
                // 返回promise对象
                return deferred.promise;
              },
              getAllData:function(){
                console.log("这是getAllData方法");

                // $http的get请求
                $http.get("localhost:8081/areas/78").success(function(data,status,headers,config){

                  }).error(function(reason,status,headers,config){

                  });

                // $http的post请求
                $http.post("localhost:8081/areas",{typeNumber:10004}).success(function(data,status,headers,config){

                }).error(function(reason,status,headers,config){

                });

                // $http的跨域请求访问
                var obj={
                  a:1,
                  b:2
                }
                // 将对象转换成字符串
                var pms=JSON.stringify(obj);
                // 拼接数据请求访问地址
                var url=Global.SERVER_PATH+"/areas?message=pms&callback=JSON_CALLBACK";
                // 通过jsonp方式进行跨域访问
                $http.jsonp(url).success(function(data,status,headers,config){

                }).error(function(reason,status,headers,config){

                });



              },
              deleteById:function(){
                console.log("这是deleteById方法");
              }

    };
        
    })