<template>
  <div id="footer">
    <ul>
      <li :class="{on:$route.path==='/home'}"    @click="goto('/home')">
        <div class="footer_icon">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>首页</span>
      </li>

      <li :class="{on:$route.path==='/categorylist'}"  @click="goto('/categorylist')">
        <div class="footer_icon">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>分类</span>
      </li>

      <li :class="{on:$route.path==='/recommend'}" @click="goto('/recommend')">
        <div class="footer_icon">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>识物</span>
      </li>

      <li :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
        <div class="footer_icon">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>购物车</span>
      </li>

      <li :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
        <div class="footer_icon">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
        </div>
        <span>个人</span>
      </li>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "FooterNav",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #footer
     ul
       position fixed
       bottom 0
       left 0
       display flex
       justify-content space-around
       height 100px
       width 100%
       font-size 24px
       background-color #fff
       border-top: 1px solid #d9d9d9;
       li
         flex 1
         flex-direction column
         justify-content space-around
         align-items center
         display flex
         .footer_icon
             position relative
             width 40px
             height 40px
             overflow hidden
             justify-content center
             img
                position absolute
                left 0
                top 0
                width 40px
                height 490px
         &:nth-of-type(1)
             img
               top -245px
         &:nth-of-type(2)
             img
               top -147px

         &:nth-of-type(3)
             img
               top -343px
         &:nth-of-type(4)
             img
               top -49px
         &:nth-of-type(5)
             img
               top -441px
         &.on
             color $red
             img
                transform translateY(49px)
</style>
