angular.module('made.controller',['made.service'])

    .controller('madeCtrl',function($scope){
       
        $(function() {

             $('#made #do ul li').each(function(index, el) {
                
                $(this).click(function(event) {

                    $(this).addClass('active').siblings().removeClass('active');
                    $('#made #recommend ol li').eq($(this).index()).addClass('active').siblings().removeClass('active');
                });
            });

        });

        // 轮播图
        $scope.doData = [{
            img:'img/made/made_006.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_020.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_021.jpg',
            alt:'商品...'
        }]


        var doSlide = new Swiper('#doSlide', {
            pagination:'.swiper-pagination',
            paginationClickable :true,
            autoplay:2000,
            loop:true,
            observer:true,
            observeParents:true,
            autoplayDisableOnInteraction : false,
        })

        // 返场商品列表
        
        $scope.backData = [{
            img:'img/made/made_016.jpg',
            alt:'商品...',
            text:'仁昌记.老...',
            price:'￥36.0',
            sale:'21人购买'
        },{
            img:'img/made/made_017.jpg',
            alt:'商品...',
            text:'老大昌.古...',
            price:'￥29.0',
            sale:'38人购买'
        },{
            img:'img/made/made_022.jpg',
            alt:'商品...',
            text:'天台宋红...',
            price:'￥49.0',
            sale:'24人购买'
        },{
            img:'img/made/made_023.jpg',
            alt:'商品...',
            text:'竹隐系列...',
            price:'￥299.0',
            sale:'41人购买'
        },{
            img:'img/made/made_024.jpg',
            alt:'商品...',
            text:'竹隐系列...',
            price:'￥299.0',
            sale:'2人购买'
        },{
            img:'img/made/made_025.jpg',
            alt:'商品...',
            text:'信源银楼...',
            price:'￥128.0',
            sale:'80人购买'
        },{
            img:'img/made/made_026.jpg',
            alt:'商品...',
            text:'丰同裕.蓝...',
            price:'￥85.0',
            sale:'22人购买'
        },{
            img:'img/made/made_027.jpg',
            alt:'商品...',
            text:'神雕.玄月...',
            price:'￥1700.0',
            sale:'6人购买'
        },{
            img:'img/made/made_028.jpg',
            alt:'商品...',
            text:'神雕.山水...',
            price:'￥2000.0',
            sale:'6人购买'
        },{
            img:'img/made/made_029.jpg',
            alt:'商品...',
            text:'天工.黑色...',
            price:'￥99.0',
            sale:'23人购买'
        }]


        // 故事列表
        
        $scope.oldData = [{
            img:'img/made/made_030.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_018.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_019.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_031.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_032.jpg',
            alt:'商品...'
        },{
            img:'img/made/made_033.jpg',
            alt:'商品...'
        }]


        // 定制列表
        function allList(){
           this.img1 = '';
           this.img2 = '';
           this.img3 = '';
           this.img4 = '';
           this.text1 = '';
           this.text2 = '';
           this.text3 = '';
           this.text4 = '';
           this.text5 = '';
           this.price = '';
           this.alt = '';
           this.num = '';
           this.money = '';
        }

        allList.prototype = {

            bindDom:function(){

                var str  ='';

                str +=' <a href="javascript:;"  id="allList">'
                    str+='<div class="all-top">'
                        str +='<img src="'+this.img1+'" alt="'+this.alt+'" class="img1" />'
                    str+='</div>'
                    str +='<div class="all-bottom">'
                        str +='<u>'+this.text1+'</u>'
                        str +='<em>'+this.price+'</em>'
                        str +='<img src="'+this.img2+'" alt="'+this.alt+'" class="img2" />'
                        str +='<h2>'+this.text2+'人已定制 | 已下定'+this.money+'元</h2>'
                        str +='<h3>完成'+this.text3+'</h3>'
                    str +='</div>'
                    str +='<div class="all-footer">'
                        str +='<p><img src="'+this.img3+'" alt="'+this.alt+'" /><span>'+this.text4+'</span></p> '
                        str +=' <p><img src="'+this.img4+'" alt="" /><span>'+this.text5+'</span></p>'
                        str +=' <em><img src="img/made/dingzhi_comment_num.png" alt="" /><span>'+this.num+'</span></em>'
                    str +=' </div>'
                str +='</a>'

                return str;
            }
        }

        var allData  = [{
            img1:'img/made/made_034.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'苏绣团扇，一摇一曳间的中国美',
            text2:'6',
            text3:'98%',
            text4:'美，我喜欢',
            text5:'美，我喜欢',
            price:'￥319.0起',
            alt:'商品...',
            money:'2301.0',
            num:'3'
        },{
            img1:'img/made/made_005.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'吃货团盖章，高人气消夏零食礼盒',
            text2:'25',
            text3:'81%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥98.0起',
            alt:'商品...',
            money:'2450.0',
            num:'3'
        },{
            img1:'img/made/made_004.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'龙泉女婿的西湖情',
            text2:'32',
            text3:'169%',
            text4:'比五谷杂粮多两谷 噗',
            text5:'比五谷杂粮多两谷 噗',
            price:'￥33.0起',
            alt:'商品...',
            money:'5072.0',
            num:'7'
        },{
            img1:'img/made/made_003.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'食天然之色，守护全家人的营养',
            text2:'14',
            text3:'41%',
            text4:'特别漂亮',
            text5:'特别漂亮',
            price:'￥33.0起',
            alt:'商品...',
            money:'1238.0',
            num:'7'
        },{
            img1:'img/made/made_002.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'一只冷淡风的百变收纳盒',
            text2:'21',
            text3:'40%',
            text4:'太喜欢青瓜啦！买了三个，自己留一个，两个送朋友',
            text5:'太喜欢青瓜啦！买了三个，自己留一个，两个送朋友',
            price:'88.0起',
            alt:'商品...',
            money:'2008.0',
            num:'3'
        },{
            img1:'img/made/made_001.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'国医配香苗女手作，台湾金点奖...',
            text2:'63',
            text3:'148%',
            text4:'喜欢笔画那个，汉字比那些外国字美多了。',
            text5:'喜欢笔画那个，汉字比那些外国字美多了。',
            price:'118.0起',
            alt:'商品...',
            money:'7434.0',
            num:'5'
        }];


        var foodsData  = [{
            img1:'img/made/made_005.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'吃货团盖章，高人气消夏零食礼盒',
            text2:'25',
            text3:'81%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥98.0起',
            alt:'商品...',
            money:'2450.0',
            num:'3'
        },{
            img1:'img/made/made_003.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'食天然之色，守护全家人的营养',
            text2:'14',
            text3:'41%',
            text4:'特别漂亮',
            text5:'特别漂亮',
            price:'￥33.0起',
            alt:'商品...',
            money:'1238.0',
            num:'7'
        },{
            img1:'img/made/made_041.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'严选原产地花茶，名中医推荐美肤茶',
            text2:'16',
            text3:'71%',
            text4:'女孩子喝玫瑰花，皮肤嫩嫩哒。',
            text5:'女孩子喝玫瑰花，皮肤嫩嫩哒。',
            price:'35.0起',
            alt:'商品...',
            money:'1421.0',
            num:'3'
        },{
            img1:'img/made/made_047.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'平日里买不到的“极品”调味料',
            text2:'96',
            text3:'117%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'29.0起',
            alt:'商品...',
            money:'5900.0',
            num:'3'
        },{
            img1:'img/made/made_048.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'130年卤水臭豆腐，排队也买不到',
            text2:'684',
            text3:'101%',
            text4:'无法抗拒臭豆腐，发明臭豆腐的人是个天才！',
            text5:'无法抗拒臭豆腐，发明臭豆腐的人是个天才！',
            price:'29.9起',
            alt:'商品...',
            money:'30334.8',
            num:'48'
        },{
            img1:'img/made/made_049.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'苏绣团扇，一摇一曳间的中国美',
            text2:'6人已定制|已下定19706.0元',
            text3:'98%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥319.0起',
            alt:'商品...',
            money:'1421.0',
            num:'3'
        }];


        var designData  = [{
             img1:'img/made/made_004.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'龙泉女婿的西湖情',
            text2:'32',
            text3:'169%',
            text4:'比五谷杂粮多两谷 噗',
            text5:'比五谷杂粮多两谷 噗',
            price:'￥33.0起',
            alt:'商品...',
            money:'5072.0',
            num:'7'
        },{
           img1:'img/made/made_002.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'一只冷淡风的百变收纳盒',
            text2:'21',
            text3:'40%',
            text4:'太喜欢青瓜啦！买了三个，自己留一个，两个送朋友',
            text5:'太喜欢青瓜啦！买了三个，自己留一个，两个送朋友',
            price:'88.0起',
            alt:'商品...',
            money:'2008.0',
            num:'3'
        },{
            img1:'img/made/made_001.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'国医配香苗女手作，台湾金点奖...',
            text2:'63',
            text3:'148%',
            text4:'喜欢笔画那个，汉字比那些外国字美多了。',
            text5:'喜欢笔画那个，汉字比那些外国字美多了。',
            price:'118.0起',
            alt:'商品...',
            money:'7434.0',
            num:'5'
        },{
            img1:'img/made/made_008.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'复原端午习俗之精髓，过一个正统端',
            text2:'416',
            text3:'1837%',
            text4:'礼盒很好看！买了送人很不错~',
            text5:'礼盒很好看！买了送人很不错~',
            price:'0.0起',
            alt:'商品...',
            money:'36760.0',
            num:'18'
        },{
            img1:'img/made/made_050.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'用百年宫廷技艺刻一把专属好梳',
            text2:'28',
            text3:'101%',
            text4:'黄铜和木头感觉很配',
            text5:'黄铜和木头感觉很配',
            price:'￥319.0起',
            alt:'商品...',
            money:'5084.0',
            num:'7'
        },{
            img1:'img/made/made_009.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'十里桃花，落到了这把“非遗”油纸伞上',
            text2:'100',
            text3:'291%',
            text4:'很应季，送人不错',
            text5:'很应季，送人不错',
            price:'￥5.0起',
            alt:'商品...',
            money:'14577.0',
            num:'26'
        }];


        var skillData  = [{
            img1:'img/made/made_034.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'苏绣团扇，一摇一曳间的中国美',
            text2:'6',
            text3:'98%',
            text4:'美，我喜欢',
            text5:'美，我喜欢',
            price:'￥319.0起',
            alt:'商品...',
            money:'2301.0',
            num:'3'
        },{
            img1:'img/made/made_010.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'用艺术品的标准制作一件收纳好物',
            text2:'54',
            text3:'269%',
            text4:'螺钿工艺实在太精致了',
            text5:'螺钿工艺实在太精致了',
            price:'88.0起',
            alt:'商品...',
            money:'13452.0',
            num:'12'
        },{
            img1:'img/made/made_043.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'真正好梳能陪你一辈子',
            text2:'127',
            text3:'273%',
            text4:'美，我喜欢',
            text5:'美，我喜欢',
            price:'78.0起',
            alt:'商品...',
            money:'13666.0',
            num:'4'
        },{
            img1:'img/made/made_044.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'一把“非遗”油纸伞的文艺逼格',
            text2:'53',
            text3:'461%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥319.0起',
            alt:'商品...',
            money:'9232.0',
            num:'3'
        },{
            img1:'img/made/made_045.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'一把“非遗”油纸伞的文艺逼格',
            text2:'53',
            text3:'461%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥319.0起',
            alt:'商品...',
            money:'9232.0',
            num:'3'
        },{
            img1:'img/made/made_046.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'苏绣团扇，一摇一曳间的中国美',
            text2:'416',
            text3:'98%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥319.0起',
            alt:'商品...',
            money:'1421.0',
            num:'3'
        }];


        var cultureData = [{
            img1:'img/made/made_042.jpg',
            img2:'img/made/made_035.jpg',
            img3:'img/made/dingzhi_001.png',
            img4:'img/made/dingzhi_001.png',
            text1:'苏绣团扇，一摇一曳间的中国美',
            text2:'416',
            text3:'98%',
            text4:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            text5:'吃过那个山楂和花生，好吃。这次可一起买便宜，',
            price:'￥319.0起',
            alt:'商品...',
            money:'1421.0',
            num:'3'
        }]


        // 推荐
        var box1 = '';

        for(var i=0;i<allData.length; i++) {

        var goods = new allList();

            goods.img1 = allData[i].img1;
            goods.img2 = allData[i].img2;
            goods.img3 = allData[i].img3;
            goods.img4 = allData[i].img4;
            goods.text1 = allData[i].text1;
            goods.text2 = allData[i].text2;
            goods.text3 = allData[i].text3;
            goods.text4 = allData[i].text4;
            goods.text5 = allData[i].text5;
            goods.price = allData[i].price;
            goods.alt = allData[i].alt;
            goods.money = allData[i].money;
            goods.num = allData[i].num;

            box1 += goods.bindDom();
        }        
            document.getElementById('all').innerHTML = box1;
       


        // 古法美食
        var box2 = '';

        for(var i=0;i<foodsData.length; i++) {

        var goods = new allList();

            goods.img1 = foodsData[i].img1;
            goods.img2 = foodsData[i].img2;
            goods.img3 = foodsData[i].img3;
            goods.img4 = foodsData[i].img4;
            goods.text1 = foodsData[i].text1;
            goods.text2 = foodsData[i].text2;
            goods.text3 = foodsData[i].text3;
            goods.text4 = foodsData[i].text4;
            goods.text5 = foodsData[i].text5;
            goods.price = foodsData[i].price;
            goods.alt = foodsData[i].alt;
            goods.money = foodsData[i].money;
            goods.num = foodsData[i].num;

            box2 += goods.bindDom();
        }        

            document.getElementById('foods').innerHTML = box2;


         // 独家设计
        var box3 = '';

        for(var i=0;i<designData.length; i++) {

        var goods = new allList();

            goods.img1 = designData[i].img1;
            goods.img2 = designData[i].img2;
            goods.img3 = designData[i].img3;
            goods.img4 = designData[i].img4;
            goods.text1 = designData[i].text1;
            goods.text2 = designData[i].text2;
            goods.text3 = designData[i].text3;
            goods.text4 = designData[i].text4;
            goods.text5 = designData[i].text5;
            goods.price = designData[i].price;
            goods.alt = designData[i].alt;
            goods.money = designData[i].money;
            goods.num = designData[i].num;

            box3 += goods.bindDom();
        }        

            document.getElementById('design').innerHTML = box3;


         // 百年技艺
        var box4 = '';

        for(var i=0;i<skillData.length; i++) {

        var goods = new allList();

            goods.img1 = skillData[i].img1;
            goods.img2 = skillData[i].img2;
            goods.img3 = skillData[i].img3;
            goods.img4 = skillData[i].img4;
            goods.text1 = skillData[i].text1;
            goods.text2 = skillData[i].text2;
            goods.text3 = skillData[i].text3;
            goods.text4 = skillData[i].text4;
            goods.text5 = skillData[i].text5;
            goods.price = skillData[i].price;
            goods.alt = skillData[i].alt;
            goods.money = skillData[i].money;
            goods.num = skillData[i].num;

            box4 += goods.bindDom();
        }        

            document.getElementById('skill').innerHTML = box4;


        var box5 = '';

        for(var i=0;i<cultureData.length; i++) {

        var goods = new allList();

            goods.img1 = cultureData[i].img1;
            goods.img2 = cultureData[i].img2;
            goods.img3 = cultureData[i].img3;
            goods.img4 = cultureData[i].img4;
            goods.text1 = cultureData[i].text1;
            goods.text2 = cultureData[i].text2;
            goods.text3 = cultureData[i].text3;
            goods.text4 = cultureData[i].text4;
            goods.text5 = cultureData[i].text5;
            goods.price = cultureData[i].price;
            goods.alt = cultureData[i].alt;
            goods.money = cultureData[i].money;
            goods.num = cultureData[i].num;

            box5 += goods.bindDom();
        }        

            document.getElementById('culture').innerHTML = box5;


    })