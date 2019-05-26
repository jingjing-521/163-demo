<!--个人-->
<template>
  <div class="ProfileContainer">
    <HeaderLogin/>
    <router-view></router-view>
        <div class="ProfileImg">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" class="icon"/>
          <div  @click="$router.push('/profile/phonelogin')" >
            <i class="iconfont icon-shouji">手机号码登录</i>
          </div>
          <div  @click="$router.push('/profile/emaillogin')">
            <i class="iconfont icon-youxiang">邮箱账号登录</i>
          </div>

          <span class="Profilephone">
              手机号快捷注册
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png"/>
            </span>
        </div>
        <div class="wxIcon">
          <i class="iconfont icon-weixin">微信 &nbsp; |

          </i>
          <i class="iconfont icon-qq">QQ &nbsp; |

          </i>
          <i class="iconfont icon-weibo">微博</i>
        </div>
    </div>


</template>

<script type="text/ecmascript-6">
  import PhoneLogin from './PhoneLogin/PhoneLogin.vue'
  import EmailLogin from './EmailLogin/EmailLogin.vue'
  export default {
    name: "Profile",
    data(){
      return{
//        isActive:true
      }
    },
    components:{
      PhoneLogin,
      EmailLogin
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .ProfileContainer
         width 100%
         .ProfileImg
              position fixed
              width 100%
              height 100%
              background-color #F2F5F4
              .icon
                width 260px
                height 90px
                position absolute
                left 240px
                top  165px
              .iconfont
                display block
                border 1px solid #b4282d
                width 90%
                color #b4282d
                height 92px
                line-height 92px
                text-align center
                font-size 30px
              .icon-shouji
                position absolute
                left 30px
                top 410px
                background-color #b4282d
                color #ffffff
              .icon-youxiang
                position absolute
                left 30px
                top 540px
              .Profilephone
                font-size 28px
                color  #333;
                position absolute
                left 250px
                top 680px
                img
                  width 24px
                  height 24px
         .wxIcon
            width 100%
            .iconfont
              width 200px
              height 100px
              position absolute
              margin 20px
              font-size 30px
              color #7F7F7F
            .icon-weixin
              left 150px
              bottom 10px
            .icon-qq
              left 300px
              bottom 10px
            .icon-weibo
              left 450px
              bottom 10px







</style>
