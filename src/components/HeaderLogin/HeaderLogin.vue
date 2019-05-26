<template>
  <div class="HeaderLogin">
    <div class="ProfileIcon">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"/>
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.replace('/shopcart')"></i>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Header-Login"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     .HeaderLogin
         .ProfileIcon
           display flex
           justify-content space-between
           align-items center
           padding 0 20px
           height 87.98px
           background-color #fff
           box-sizing border-box
           border-bottom 1px solid #eee
           .iconfont
             font-size 49px
           img
             width 160px
             height 50px
             margin-left 150px
           .icon-sousuo
             margin-left 120px

</style>
