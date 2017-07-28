angular.module('home.controller',['home.service'])

    .controller('homeCtrl',function($scope){

        headerSlideData();
        navData();
        headerLineData();
        headerBarChange();
        newData();
       

        $scope.$on('$ionicView.afterEnter',function(e){
            headerSlide();
            headerLineSlide();
        })


        // 时间条
        var date = new Date();

        var hour = date.getHours();


        if(hour <= 12) {

            $('#home #headerLine span .img1').attr("src","img/home/morning2.gif");
            $('#home #headerLine span .img2').attr("src","img/home/good_morning.png");

        }else if (hour <= 18){

            $('#home #headerLine span .img1').attr("src","img/home/afternoon2.gif");
            $('#home #headerLine span .img2').attr("src","img/home/good_afternoon.png");
        }else {

            $('#home #headerLine span .img1').attr("src","img/home/evening2.gif");
            $('#home #headerLine span .img2').attr("src","img/home/good_evening.png");
        }



        // 轮播
        function headerSlideData(){

            $scope.headerSlideData = [{

                img:'img/home/home_038.jpg',
                alt:'商品....'
            },{
                img:'img/home/home_039.jpg',
                alt:'商品....'
            },{
                img:'img/home/home_040.jpg',
                alt:'商品....'
            },{
                img:'img/home/home_026.jpg',
                alt:'商品....'
            }]
        }
       
        function headerSlide(){
            var headerSlide = new Swiper('#headerSlide',{
                pagination:'.swiper-pagination',
                paginationClickable :true,
                autoplay:2000,
                loop:true,
                observer:true,
                observeParents:true,
                autoplayDisableOnInteraction : false,
            })
        }

        // 功能
        
        function navData(){

            $scope.navData = [{
                href:'#/history',
                img:'img/home/home_021.jpg',
                alt:'商品....',
                text:'故事'
            },{
                href:'#/login',
                img:'img/home/home_022.jpg',
                alt:'商品....',
                text:'送福利'
            },{
                href:'javascript',
                img:'img/home/home_023.jpg',
                alt:'商品....',
                text:'老黄历'
            },{
                href:'javascript',
                img:'img/home/home_024.jpg',
                alt:'商品....',
                text:'实验室'
            }]
        }

        // 时间条
        
          function headerLineData(){

            $scope.headerLineData = [{

                text:'. 江南粽子状元诸老大'
            },{
                
                text:'. 始终坚持着古法印染的吴越人家'
            },{

                text:'. 百年前就得过国际金奖的青岛啤酒'
            },{
               
                text:'. 始于1895年的凉茶徐其修'
            }]
        }


        function headerLineSlide(){
            var headerLineSlide = new Swiper('#headerLineSlide',{
                autoplay:2000,
                loop:true,
                direction:'vertical',
                observer:true,
                observeParents:true,
            })
        }


            // 最新定制
          function newData(){

            $scope.newData = [{

                img:'img/home/home_029.jpg',
                alt:'商品....',
                text:'高人气零食',
                price:'￥ 98.0 起',
                word:'16人已定制'
            },{
                img:'img/home/home_030.jpg',
                alt:'商品....',
                text:'龙泉青瓷',
                price:'￥ 33.0 起',
                word:'33人已定制'
            },{
                img:'img/home/home_031.jpg',
                alt:'商品....',
                text:'全家吃谷杂',
                price:'￥ 33.0 起',
                word:'15人已定制'
            },{
                img:'img/home/home_032.jpg',
                alt:'商品....',
                text:'夏日美肤花',
                price:'￥ 35.0 起',
                word:'19人已定制'
            },{
                img:'img/home/home_033.jpg',
                alt:'商品....',
                text:'百变收纳盒',
                price:'￥ 88.0 起',
                word:'23人已定制'
            }]
        }

        // 产品
        function product(){
            this.messages = '';
            this.pic = '';
            this.text = '';
            this.img = '';
            this.time  = '';
            this.word = '';
            this.view = '';
        }

        product.prototype = {

            bindDom:function(){

                var str  ='';

                str +=' <div id="product">'
                    str +=' <div class="product-top">'
                        str +='<img src="'+this.pic+''
                        str +='<h2>'+this.messages+'</h2>'
                        str +=' <p>'+this.text+'</p>'
                    str +='</div>'
                    str +=' <div class="product-bottom">'
                        str +=' <img src="'+this.img+'"/>'
                        str +='<div class="product-right">'
                            str +='<span>'+this.time+'</span>'
                            str+='<em></em>'
                            str +='<img src="img/home/comment_gray.png" alt="" />'
                            str +='<span>'+this.word+'</span>'
                            str +='<img src="img/home/dingzhi_comment_view.png" alt="" />'
                            str +='<span>'+this.view+'</span>'
                        str +=' </div>'
                    str +='</div>'
                str +='</div>'

                return str;
            }
        }

        var data  = [
            {messages:'惊！这群人竟然礼拜一就开始喝酒',pic:'img/home/home_004.jpg"/>',text:'上班不喝酒，白在世上走',img:'img/home/home_035.jpg',time:'2017-06-20',word:'6',view:'416'},
            {messages:'夏日喝这些茶，解暑养眼两不误',pic:'img/home/home_003.jpg"/>',text:'一到夏天很多人会热衷喝茶解暑，大部分女性喜欢用花...',img:'img/home/home_036.jpg',time:'2017-06-13',word:'1',view:715},
            {messages:'有了这把伞，你会爱上下雨天',pic:'img/home/home_001.jpg"/>',text:'满满文艺范儿的泸州油纸伞',img:'img/home/home_036.jpg',time:'2017-06-09',word:'0',view:'3k'},
            {messages:'小满将至',pic:'img/home/home_011.jpg"/>',text:'中医注重天人合一，顺应自然而，知时而食。',img:'img/home/home_036.jpg',time:'2017-05-19',word:'1',view:'2k'},
            {messages:'岁月带走时光，却带不走你的美',pic:'img/home/home_006.jpg"/>',text:'母亲节，送给妈妈最用心的礼物',img:'img/home/home_036.jpg',time:'2017-05-11',word:'3',view:'3k'},
            {messages:'今日立夏',pic:'img/home/home_007.jpg"/>',text:'盛夏正式开始，好味凉食买起来~',img:'img/home/home_036.jpg',time:'2017-05-08',word:'0',view:'3k'},
            {messages:'最原汁原味的端午，今年由我们来给你',pic:'img/home/home_008.jpg"/>',text:'今年，你还准备吃两个粽子草草过完端午节吗？',img:'img/home/home_036.jpg',time:'2017-05-07',word:'0',view:'3k'},
            {messages:'关于模具，我有个大胆的想法',pic:'img/home/home_009.jpg"/>',text:'「去体验」百年前的古法制作糕点',img:'img/home/home_036.jpg',time:'2017-05-04',word:'7',view:'189'},
        ];


        var box = '';

        for(var i=0;i<data.length; i++) {

        var goods = new product();

        goods.messages = data[i].messages;
        goods.pic = data[i].pic;
        goods.text = data[i].text;
        goods.img = data[i].img;
        goods.time = data[i].time;
        goods.word = data[i].word;
        goods.view = data[i].view;

        box += goods.bindDom();
    }        

        document.getElementById('goods').innerHTML = box;

       

        //导航吸顶
        function headerBarChange() {
            var box = document.getElementById('home-content');

            box.onscroll = function(){

                if(this.scrollTop > 145){

                    document.getElementById('headerBar-bg').style.opacity = 0.8;
                }else {
                    document.getElementById('headerBar-bg').style.opacity = 0;
                }
            }
        }




    })