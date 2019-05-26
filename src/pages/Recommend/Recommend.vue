<!--识物-->
<template>
  <div id="RecommendContainer">
    <div class="ProfileIcon">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <span :class="{on:$route.path==='/Profile/topic/index'}" @click="goTo('/topic/index')">发现</span>
      <span :class="{on:$route.path==='/expert/index'}" @click="goTo('/expert/index')">甄选家</span>
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.push('/shopcart')"></i>
    </div>
    <div class="RecommendList">
      <div class="menu-wrapper" >
        <ul class="RecommendItem" @click="addActive($event)">
          <li :class="{active:curA===0}" data-this-index="0">推荐</li>
          <li :class="{active:curA===1}" data-this-index="1">好货内部价</li>
          <li :class="{active:curA===2}" data-this-index="2">回购榜</li>
          <li :class="{active:curA===3}" data-this-index="3">晒单</li>
          <li :class="{active:curA===4}" data-this-index="4">开发者日记</li>
       </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'


  export default {
    name: "Recommend",
    data () {
      return {
        curA: 0
      }
    },



    mounted () {
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll = new BScroll(".menu-wrapper", {
            click: true,
            scrollX: true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
    methods: {
      goTo(path){
        this.$router.replace(path)
      },


      addActive (e) {
        this.curA = +e.target.dataset.thisIndex
      }

    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

     #RecommendContainer
            width 100%
            position fixed
            .ProfileIcon
               display flex
               justify-content space-between
               align-items center
               padding 0 20px
               height 87.98px
               background-color #fff
               box-sizing border-box

               .iconfont
                 font-size 49px
               span
                  font-size 26px
                  color #7F7F7F
                  padding-left   120px
                  box-sizing border-box

                 &:on
                   font-weight bold
                   font-size 40px
                   color red

               .icon-sousuo
                 margin-left 120px
            .RecommendList
                 size 27.9998px
                 width 100%
                 overflow hidden
                 display flex
                 border-bottom 5px solid #eee
                 .RecommendItem
                   width 100%
                   height 60px
                   display flex
                   /*background red*/
                   li
                     width 120px
                     height 60px
                     line-height 60px
                     text-align center
                     padding 0px 15px
                     /*box-sizing border-box*/
                     &.active
                          border-bottom 5px solid  #B4282D
                          color #B4282D

</style>
