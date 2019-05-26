<template>
  <div class="EmailLogin">
    <HeaderLogin/>
    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    <div class="inputLogin">
      <!--邮箱验证-->
      <input class="input" placeholder="邮箱账号" style="font-size: 15px" type="text" name="email" v-model="email" v-validate="{required:true,email:true}"/>
      <span style="color: red">{{errors.first('email')}}</span>

      <input class="input" placeholder="密码" style="font-size: 15px" type="text">
      <span class="is-left">注册账号</span>
      <span class="is-right">忘记密码</span>
      <div class="Login">
        <span class="iconfont1" >登录</span>
      </div>
      <div class="Login" @click="$router.push('/profile')">
        <span class="iconfont2 ">其他登陆方式</span>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "EmailLogin",
    data(){
      return{
        email:''//email初始状态

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .EmailLogin
          width 100%
          height 1000.95px
          background-color #ffffff
          img
            width 200px
            height 70px
            margin 8% 32%
          .inputLogin
              width 100%
              height 500px
              padding 100px 30px
              background-color #ffffff
              box-sizing border-box
              .input
                  width 100%
                  height 100px
                  outline:none
                  border-bottom 1px solid #eee
                  &::-webkit-input-placeholder
                    font-size 29px
                    margin-bottom 20px
              .is-left
                  display block
                  width 150px
                  height 100px
                  line-height 100px
                  text-align center
                  font-size 30px
                  color #C0C0C0
              .is-right
                  font-size 28px
                  color #C0C0C0
                  position absolute
                  right 30px
                  top 620px
              .Login
                  display block
                  border 1px solid #b4282d
                  width 100%
                  color #b4282d
                  height 92px
                  line-height 92px
                  text-align center
                  font-size 30px
                  margin-bottom 30px
                .iconfont1
                    display block
                    background-color #b4282d
                    color #ffffff
</style>

