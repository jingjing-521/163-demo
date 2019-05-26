<template>
  <header id="headerContainer">
    <div class="headerSearch">
        <span class="logo" @click="$router.replace('/home')"></span>
        <div class="searchInput">
          <p class="iconfont icon-sousuo"></p>
          <span class="placeholder" @click="$router.push('/search')">搜索商品，共22893款好物</span>
        </div>
        <button @click="$router.push('/profile')">登录</button>
    </div>

    <div class="header-nav">
      <div class="menu-wrapper" >
        <ul class="header-list">
          <li   v-for="(item,index) in ['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','全球特色','更多']" :key="index">{{item}}</li>
        </ul>
      </div>

      <div class="img-box">
        <img :class="{is_open: isOpen}" @click="isOpen=!isOpen " :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'"/>
      </div>
      <div class="all_nav_box" v-show="isOpen">
          <div class="all_nav_white">
              <p>全部频道</p>
              <ul class="all_nav clearfix" ref="allNav">
                <li><a href="javascript:">推荐</a></li>
                <li><a href="javascript:">居家生活</a></li>
                <li><a href="javascript:">服饰鞋包</a></li>
                <li><a href="javascript:">美食酒水</a></li>
                <li><a href="javascript:">个户清洁</a></li>
                <li><a href="javascript:">母婴亲子</a></li>
                <li><a href="javascript:">运动旅行</a></li>
                <li><a href="javascript:">数码家电</a></li>
                <li><a href="javascript:">全球特色</a></li>
              </ul>
          </div>
      </div>

    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'


  export default {
    name: 'Header',
    data () {
      return {
        isOpen: false
      }
    },

    mounted () {
//       console.log(this)
     this.$nextTick(()=>{
       new BScroll('.menu-wrapper',{
         scrollX:true,
          click:true
       })
     })
    },

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   #headerContainer
        z-index 1000
        position fixed
        top 0
        left 0
        width 100%
        height 150px
        background-color #fff
        .headerSearch
             display flex
             width 100%
             height 87.97px
             padding 16px 30px
             box-sizing border-box
             align-items center
             .logo
                  width 200px
                  height 40px
                  background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
                  background-repeat no-repeat
                  background-size 140px 40px
                  margin-right 50px

             .searchInput
                  width 560px
                  height 60px
                  background-color #EDEDED
                  display flex
                  justify-content center
                  align-items center
                  margin-right 20px


                  .iconfont
                      width 28px
                      height 28px
                      margin-right 10px
                  .placeholder
                       font-size 27px
                       color #666
             button
                  width 120px
                  height 45px
                  border 2px solid #B4282D
                  color #b4282d
                  background-color #ffffff
                  border-radius 10px
     .header-search-login
             display flex
             justify-content space-around
             align-items center
             font-size 30px
             width 100%
             height 88px
             padding 25px
             box-sizing border-box

        .header-nav
           .menu-wrapper
               display flex
               font-size 27.9998px
               width 100%
               overflow hidden
               margin-right 150px
               .header-list
                 display flex

                 li
                   width 150px
                   height 60px
                   line-height 60px
                   text-align center

            .img-box
               width 130px
               height 62px
               position absolute
               right 0px
               top 88px
               background-color #fff
               z-index 100
               img
                  width 30px
                  height 30px
                  position absolute
                  left  55px
                  top 20px
                  transition transform 300ms linear
                  &.is_open
                     transform rotateZ(180deg)
            .all_nav_box
                 position fixed
                 width 100%
                 height 100%
                 background-color rgba(0,0,0,.5)
                 .all_nav_white
                       position absolute
                       top -50px
                       left 0
                       width 100%
                       background-color #fff
                       padding 0 0 0 30px
                       box-sizing border-box
                       border-top 1px solid #eee
                       >p
                         height 60px
                         margin-top 20px
                         display block
                         color 27.9998px
                         font-size 30px
                       .all_nav
                         display flex
                         flex-wrap wrap
                         justify-content flex-start
                         padding 35px 0 0
                         box-sizing border-box

                         li
                           width 150px
                           height 56px
                           line-height 56px
                           text-align center
                           background-color #FAFAFA
                           margin   0 30px 40px 0
                           border 1px solid #CCC
                           box-sizing border-box
                           a
                             color #333





</style>
