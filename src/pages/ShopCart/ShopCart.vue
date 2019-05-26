<!--购物车-->
<template>
   <div id="ShopCartContainer">
      <div class="ShopCartHeader">
        <span>购物车</span>
        <p>领券</p>
      </div>
      <div class="ShopCartList">
        <span class="ShopCartItem">
         <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png"/>
         30天无忧退货
        </span>
        <span class="ShopCartItem">
         <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png"/>
         48小时快速退款
        </span>
        <span class="ShopCartItem">
         <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png"/>
         满88元免邮费
        </span>
      </div>
      <div class="ShopCartImg">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"/>
          <span class="title">去添加点什么吧</span>
          <span class="btn" @click="$router.replace('/profile')">登录</span>
      </div>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "ShopCart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      #ShopCartContainer
            width 100%
            .ShopCartHeader
                 display flex
                 justify-content space-between
                 align-items center
                 padding 30px
                 height 87.98px
                 background-color #fff
                 box-sizing border-box

                 span
                    color black
                    font-size 36px

                 p
                    color: #B4282D;
                    font-size 30px
            .ShopCartList

                 height 69.98px
                 display flex
                 justify-content space-between
                 align-items center
                 padding 30px
                 box-sizing border-box
                 background-color: #f4f4f4
                 color: #666
                 img
                   width 9.98px
                   height 9.98px
            .ShopCartImg
                 position fixed
                 height 100%
                 width 100%
                 background-color #f4f4f4
                 font-size 27.9998px
                 color: #999
                 img
                    width 248px
                    height 248px
                    position relative
                    left 250px
                    top 380px
                 .title
                    position absolute
                    left 280px
                    top 620px
                 .btn
                    position absolute
                    left 130px
                    top 680px
                    background-color: #b4282d
                    border 1px solid #b4282d
                    color #fff
                    width 480px
                    height 92px
                    line-height 92px
                    text-align center
                    font-size 30px

</style>
