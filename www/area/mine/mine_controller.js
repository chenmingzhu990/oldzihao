angular.module('mine.controller',['mine.service'])

    .controller('mineCtrl',function($scope){

        // 菜单栏
        $scope.listData = [{
            img:'img/mine/me_car.png',
            alt:'商品...',
            text:'购物车'
        },{
            img:'img/mine/me_discount_coupon.png',
            alt:'商品...',
            text:'优惠券'
        },{
            img:'img/mine/my_like.png',
            alt:'商品...',
            text:'我的收藏'
        }]


        // 订单列表
        $scope.orderListData = [{
            img:'img/mine/my_be_paid.png',
            alt:'商品...',
            text:'待支付'
        },{
            img:'img/mine/my_crowdfunding.png',
            alt:'商品...',
            text:'已下定'
        },{
            img:'img/mine/my_be_shipped.png',
            alt:'商品...',
            text:'待发货'
        },{
            img:'img/mine/my_receipt_of_good.png',
            alt:'商品...',
            text:'待收货'
        }]


        // 消息列表
         $scope.messagesData = [{
            img:'img/mine/my_customer.png',
            alt:'商品...',
            text:'客服',
            pic:''
        },{
            img:'img/mine/my_share_gifts.png',
            alt:'商品...',
            text:'邀请有礼',
            pic:'img/mine/my_share_gifts_head.png'
        },{
            img:'img/mine/my_recommend_to_a_friend.png',
            alt:'商品...',
            text:'推荐APP',
            pic:''
        },{
            img:'img/mine/my_address.png',
            alt:'商品...',
            text:'我的地址',
            pic:''
        },{
            img:'img/mine/my_message.png',
            alt:'商品...',
            text:'我的消息',
            pic:''
        },{
            img:'img/mine/my_help.png',
            alt:'商品...',
            text:'帮助',
            pic:''
        },{
            img:'img/mine/my_suggestion.png',
            alt:'商品...',
            text:'意见反馈',
            pic:''
        }]



    })