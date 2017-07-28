angular.module('find.controller',['find.service'])

    .controller('findCtrl',function($scope){

        // 功能
        $scope.navData = [{
            href:'javascript',
            img:'img/find/find_001.jpg',
            alt:'商品....',
            text:'臻选'
        },{
            href:'javascript',
            img:'img/find/find_002.jpg',
            alt:'商品....',
            text:'送礼'
        },{
            href:'javascript',
            img:'img/find/find_003.jpg',
            alt:'商品....',
            text:'独家'
        },{
            href:'javascript',
            img:'img/find/find_004.jpg',
            alt:'商品....',
            text:'美食'
        },{
            href:'javascript',
            img:'img/find/find_005.jpg',
            alt:'商品....',
            text:'滋补'
        },{
            href:'javascript',
            img:'img/find/find_006.jpg',
            alt:'商品....',
            text:'茶'
        },{
            href:'javascript',
            img:'img/find/find_007.jpg',
            alt:'商品....',
            text:'酒'
        },{
            href:'javascript',
            img:'img/find/find_008.jpg',
            alt:'商品....',
            text:'居家'
        },{
            href:'javascript',
            img:'img/find/find_009.jpg',
            alt:'商品....',
            text:'调味'
        },{
            href:'#/goodsList',
            img:'img/find/find_010.jpg',
            alt:'商品....',
            text:'全部'
        }]



        // 地区味道
        $scope.cityData = [{
            img:'img/find/find_011.jpg',
            alt:'商品....'
        },{
            img:'img/find/find_012.jpg',
            alt:'商品....'
        },{
            img:'img/find/find_013.jpg',
            alt:'商品....'
        },{
            img:'img/find/find_014.jpg',
            alt:'商品....'
        },{
            img:'img/find/find_015.jpg',
            alt:'商品....'
        },{
            img:'img/find/find_016.jpg',
            alt:'商品....'
        }]


        // 产品
        $scope.productData1 = [{
            img:'img/find/find_018.jpg',
            alt:'商品....',
            text:'张萃丰.香橼...',
            price:'￥23.8'
        },{
            img:'img/find/find_019.jpg',
            alt:'商品....',
            text:'张萃丰.丰子恺...',
            price:'￥168.0'
        },{
            img:'img/find/find_020.jpg',
            alt:'商品....',
            text:'张萃丰.丰子恺...',
            price:'￥125.0'
        },{
            img:'img/find/find_021.jpg',
            alt:'商品....',
            text:'【大有罐装雪...',
            price:'￥13.0'
        },{
            img:'img/find/find_022.jpg',
            alt:'商品....',
            text:'张萃丰.沁心...',
            price:'￥23.8'
        },{
            img:'img/find/find_023.jpg',
            alt:'商品....',
            text:'苹果脯果脯北...',
            price:'23.0'
        }]


        $scope.productData2 = [{
            img:'img/find/find_025.jpg',
            alt:'商品....',
            text:'漆花.螺钿首...',
            price:'888.0'
        },{
            img:'img/find/find_026.jpg',
            alt:'商品....',
            text:'周广胜.「喜...',
            price:'￥78.0'
        },{
            img:'img/find/find_027.jpg',
            alt:'商品....',
            text:'孔凤春.古法胭...',
            price:'￥78.0'
        },{
            img:'img/find/find_028.jpg',
            alt:'商品....',
            text:'谢馥春.工艺...',
            price:'￥195.0'
        },{
            img:'img/find/find_029.jpg',
            alt:'商品....',
            text:'周广胜.「善...',
            price:'￥128.0'
        },{
            img:'img/find/find_030.jpg',
            alt:'商品....',
            text:'漆花.采漆首...',
            price:'￥288.0'
        }]

          $scope.productData3 = [{
            img:'img/find/find_032.jpg',
            alt:'商品....',
            text:'荣欣堂 太谷...',
            price:'￥48.8'
        },{
            img:'img/find/find_033.jpg',
            alt:'商品....',
            text:'荣欣堂 太谷...',
            price:'￥28.8'
        },{
            img:'img/find/find_034.jpg',
            alt:'商品....',
            text:'荣欣堂 黑芝...',
            price:'￥45.8'
        },{
            img:'img/find/find_035.jpg',
            alt:'商品....',
            text:'荣欣堂 多味...',
            price:'￥45.8'
        },{
            img:'img/find/find_036.jpg',
            alt:'商品....',
            text:'荣欣堂 红枣味...',
            price:'￥43.8'
        },{
            img:'img/find/find_037.jpg',
            alt:'商品....',
            text:'荣欣堂 太谷饼...',
            price:'￥16.9'
        }]

          $scope.productData4 = [{
            img:'img/find/find_039.jpg',
            alt:'商品....',
            text:'王升大.双鱼酒...',
            price:'￥79.8'
        },{
            img:'img/find/find_040.jpg',
            alt:'商品....',
            text:'女儿红.玉液...',
            price:'￥25.8'
        },{
            img:'img/find/find_041.jpg',
            alt:'商品....',
            text:'天台宋红.100...',
            price:'￥68.0'
        },{
            img:'img/find/find_042.jpg',
            alt:'商品....',
            text:'致中和.青梅酒...',
            price:'￥89.0'
        },{
            img:'img/find/find_043.jpg',
            alt:'商品....',
            text:'天工.黑色纯...',
            price:'￥99.0'
        },{
            img:'img/find/find_044.jpg',
            alt:'商品....',
            text:'闲云居.「....',
            price:'￥418.0'
        }]

        $scope.productData5 = [{
            img:'img/find/find_046.jpg',
            alt:'商品....',
            text:'功德林. 多味...',
            price:'￥7.5'
        },{
            img:'img/find/find_047.jpg',
            alt:'商品....',
            text:'邵万生.卤香...',
            price:'￥32.0'
        },{
            img:'img/find/find_048.jpg',
            alt:'商品....',
            text:'功德林.挂炉...',
            price:'￥7.5'
        },{
            img:'img/find/find_049.jpg',
            alt:'商品....',
            text:'邵万生.香焗...',
            price:'￥15.8'
        },{
            img:'img/find/find_050.jpg',
            alt:'商品....',
            text:'沈大成.本帮...',
            price:'￥35.0'
        },{
            img:'img/find/find_051.jpg',
            alt:'商品....',
            text:'邵万生.五花...',
            price:'￥49.0'
        }]

        $scope.productData6 = [{
            img:'img/find/find_053.jpg',
            alt:'商品....',
            text:'沈大成.手工...',
            price:'￥58.0'
        },{
            img:'img/find/find_054.jpg',
            alt:'商品....',
            text:'沈大成.抹茶...',
            price:'￥5.8'
        },{
            img:'img/find/find_055.jpg',
            alt:'商品....',
            text:'【包邮】沈大...',
            price:'￥69.0'
        },{
            img:'img/find/find_056.jpg',
            alt:'商品....',
            text:'沈大成.云片...',
            price:'￥21.2'
        },{
            img:'img/find/find_057.jpg',
            alt:'商品....',
            text:'沈大成.花开...',
            price:'￥23.5'
        },{
            img:'img/find/find_058.jpg',
            alt:'商品....',
            text:'沈大成.凤梨...',
            price:'￥35.8'
        }]


        // 产品
    
        //  function product(){
        //     this.pic = '';
        //     this.img1 = '';
        //     this.img2 = '';
        //     this.img3 = '';
        //     this.img4 = '';
        //     this.img5 = '';
        //     this.img6 = '';
        //     this.alt = '';
        //     this.text1 = '';
        //     this.text2 = '';
        //     this.text3 = '';
        //     this.text4 = '';
        //     this.text5 = '';
        //     this.text6 = '';
        //     this.price1 = '';
        //     this.price2 = '';
        //     this.price3 = '';
        //     this.price4 = '';
        //     this.price5 = '';
        //     this.price6 = '';
        // }

        // product.prototype = {

        //     bindDom:function(){

        //         var str  ='';

        //         str +='<div id="product">'
        //             str +='<div class="product-top">'
        //                 str +='<img src="'+this.pic+'" alt="" />'
        //             str +='</div>'
        //             str +='<div class="product-bottom">'
        //                 str +='<div class="product-gray">'
        //                     str +='<ul>'
        //                         str +="<li>"
        //                             str +='<img src="'+this.img1+'" alt="'+this.alt+'" />'
        //                             str +='<p>'+this.text1+'</p>'
        //                             str +='<em>'+this.price1+'</em>'
        //                         str +='</li>'
        //                         str +="<li>"
        //                             str +='<img src="'+this.img2+'" alt="'+this.alt+'" />'
        //                             str +='<p>'+this.text2+'</p>'
        //                             str +='<em>'+this.price2+'</em>'
        //                         str +='</li>'
        //                         str +="<li>"
        //                             str +='<img src="'+this.img3+'" alt="'+this.alt+'" />'
        //                             str +='<p>'+this.text3+'</p>'
        //                             str +='<em>'+this.price3+'</em>'
        //                         str +='</li>'
        //                         str +="<li>"
        //                             str +='<img src="'+this.img4+'" alt="'+this.alt+'" />'
        //                             str +='<p>'+this.text4+'</p>'
        //                             str +='<em>'+this.price4+'</em>'
        //                         str +='</li>'
        //                         str +="<li>"
        //                             str +='<img src="'+this.img5+'" alt="'+this.alt+'" />'
        //                             str +='<p>'+this.text5+'</p>'
        //                             str +='<em>'+this.price5+'</em>'
        //                         str +='</li>'
        //                         str +="<li>"
        //                             str +='<img src="'+this.img6+'" alt="'+this.alt+'" />'
        //                             str +='<p>'+this.text6+'</p>'
        //                             str +='<em>'+this.price6+'</em>'
        //                         str +='</li>'
        //                     str +='</ul>'
        //                 str +='</div>'
        //             str +='</div>'
        //         str +='</div>'

        //         return str;
        //     }
        // }

    //     var data  = [{
    //         pic:'img/find/find_008.jpg',
    //         img1:'img/find/find_007.jpg',
    //         img2:'img/find/find_006.jpg',
    //         img3:'img/find/find_005.jpg',
    //         img4:'img/find/find_007.jpg',
    //         img5:'img/find/find_006.jpg',
    //         img6:'img/find/find_005.jpg',
    //         alt:'商品....',
    //         text1:'杭州王星记扇子折...',
    //         text2:'杭州王星记扇子折...',
    //         text3:'杭州王星记扇子折...',
    //         text4:'杭州王星记扇子折...',
    //         text5:'杭州王星记扇子折...',
    //         text6:'杭州王星记扇子折...',
    //         price1:'￥65.0',
    //         price2:'￥80.0',
    //         price3:'￥125.0',
    //         price4:'￥65.0',
    //         price5:'￥65.0',
    //         price6:'￥65.0',
    //     },{
    //         pic:'img/find/find_004.jpg',
    //         img1:'img/find/find_003.jpg',
    //         img2:'img/find/find_002.jpg',
    //         img3:'img/find/find_001.jpg',
    //         img4:'img/find/find_003.jpg',
    //         img5:'img/find/find_002.jpg',
    //         img6:'img/find/find_001.jpg',
    //         alt:'商品....',
    //         text1:'张萃丰.山楂球...',
    //         text2:'张萃丰.山楂球...',
    //         text3:'张萃丰.山楂球...',
    //         text4:'张萃丰.山楂球...',
    //         text5:'张萃丰.山楂球...',
    //         text6:'张萃丰.山楂球...',
    //         price1:'￥19.5',
    //         price2:'￥18.8',
    //         price3:'￥13.0',
    //         price4:'￥65.0',
    //         price5:'￥65.0',
    //         price6:'￥65.0',
    //     },{
    //         pic:'img/find/find_025.jpg',
    //         img1:'img/find/find_026.jpg',
    //         img2:'img/find/find_027.jpg',
    //         img3:'img/find/find_028.jpg',
    //         img4:'img/find/find_026.jpg',
    //         img5:'img/find/find_027.jpg',
    //         img6:'img/find/find_028.jpg',
    //         alt:'商品....',
    //         text1:'陈李济.陈皮...',
    //         text2:'陈李济.陈皮...',
    //         text3:'陈李济.陈皮...',
    //         text4:'陈李济.陈皮...',
    //         text5:'陈李济.陈皮...',
    //         text6:'陈李济.陈皮...',
    //         price1:'￥73.0',
    //         price2:'￥23.0',
    //         price3:'￥19.8',
    //         price4:'￥65.0',
    //         price5:'￥65.0',
    //         price6:'￥65.0',
    //     },{
    //         pic:'img/find/find_041.jpg',
    //         img1:'img/find/find_030.jpg',
    //         img2:'img/find/find_031.jpg',
    //         img3:'img/find/find_032.jpg',
    //         img4:'img/find/find_030.jpg',
    //         img5:'img/find/find_031.jpg',
    //         img6:'img/find/find_032.jpg',
    //         alt:'商品....',
    //         text1:'王升大.双鱼酒...',
    //         text2:'王升大.双鱼酒...',
    //         text3:'王升大.双鱼酒...',
    //         text4:'王升大.双鱼酒...',
    //         text5:'王升大.双鱼酒...',
    //         text6:'王升大.双鱼酒...',
    //         price1:'￥79.8',
    //         price2:'￥25.8',
    //         price3:'￥68.0',
    //         price4:'￥65.0', 
    //         price5:'￥65.0',
    //         price6:'￥65.0',
    //     },{
    //         pic:'img/find/find_033.jpg',
    //         img1:'img/find/find_034.jpg',
    //         img2:'img/find/find_035.jpg',
    //         img3:'img/find/find_036.jpg',
    //         img4:'img/find/find_034.jpg',
    //         img5:'img/find/find_035.jpg',
    //         img6:'img/find/find_036.jpg',
    //         alt:'商品....',
    //         text1:'荣欣堂  太谷...',
    //         text2:'荣欣堂  太谷...',
    //         text3:'荣欣堂  太谷...',
    //         text4:'荣欣堂  太谷...',
    //         text5:'荣欣堂  太谷...',
    //         text6:'荣欣堂  太谷...',
    //         price1:'￥48.8',
    //         price2:'￥28.8',
    //         price3:'￥45.8',
    //         price4:'￥65.0',
    //         price5:'￥65.0',
    //         price6:'￥65.0',
    //     },{
    //         pic:'img/find/find_037.jpg',
    //         img1:'img/find/find_038.jpg',
    //         img2:'img/find/find_039.jpg',
    //         img3:'img/find/find_040.jpg',
    //         img4:'img/find/find_038.jpg',
    //         img5:'img/find/find_039.jpg',
    //         img6:'img/find/find_040.jpg',
    //         alt:'商品....',
    //         text1:'功德林. 多味...',
    //         text2:'功德林. 多味...',
    //         text3:'功德林. 多味...',
    //         text4:'功德林. 多味...',
    //         text5:'功德林. 多味...',
    //         text6:'功德林. 多味...',
    //         price1:'￥7.5',
    //         price2:'￥32.0',
    //         price3:'￥7.5',
    //         price4:'￥65.0',
    //         price5:'￥65.0',
    //         price6:'￥65.0',
    //     }];


    //     var box = '';

    //     for(var i=0;i<data.length; i++) {

    //     var goods = new product();

    //     goods.pic = data[i].pic;
    //     goods.img1 = data[i].img1;
    //     goods.img2 = data[i].img2;
    //     goods.img3 = data[i].img3;
    //     goods.img4 = data[i].img4;
    //     goods.img5 = data[i].img5;
    //     goods.img6 = data[i].img6;
    //     goods.alt = data[i].alt;
    //     goods.text1 = data[i].text1;
    //     goods.text2 = data[i].text2;
    //     goods.text3 = data[i].text3;
    //     goods.text4 = data[i].text4;
    //     goods.text5 = data[i].text5;
    //     goods.text6 = data[i].text6;
    //     goods.price1 = data[i].price1;
    //     goods.price2 = data[i].price2;
    //     goods.price3 = data[i].price3;
    //     goods.price4 = data[i].price4;
    //     goods.price5 = data[i].price5;
    //     goods.price6 = data[i].price6;

    //     box += goods.bindDom();
    // } 

    //     document.getElementById('goods').innerHTML = box;
    


        //导航吸顶
        function headerBarChange() {
            var box = document.getElementById('find-content');

            box.onscroll = function(){

                if(this.scrollTop > 145){

                    document.getElementById('headerBar-bg').style.opacity = 0.8;
                }else {
                    document.getElementById('headerBar-bg').style.opacity = 0;
                }
            }
        }

    })