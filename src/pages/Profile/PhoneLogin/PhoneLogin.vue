<template>
  <div class="PhoneLogin">
    <HeaderLogin/>
    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
    <div class="inputLogin">
          <!--手机号验证-->
        <input class="input" placeholder="请输入手机号" style="font-size: 15px" type="text"
               name="phone" v-model="phone" v-validate="{required:true,regex:/^1\d{10}$/}"/>
        <span style="color: red">{{errors.first('phone')}}</span>

        <div v-if="loginType">
          <!--一次性短信验证码验证-->
          <input class="input" placeholder="请输入短信验证码" style="font-size: 15px"type="text"
                 name="code" v-model="code" v-validate="{required:true,regex:/^\d{6}$/}" />
          <span style="color: red">{{errors.first('code')}}</span>

          <button class="btn" :disabled="!isRightPhone||computeTime>0" :class="{is_right_phone:isRightPhone}" @click="sendCode">
            {{computeTime>0 ? `已发送(${computeTime}s)`: '获取验证码'}}
          </button>
          <span class="is-left">遇到问题？</span>
          <span class="is-right" @click="loginType=false">使用密码验证登录</span>
          <div class="Login">
            <span class="iconfont1" >登录</span>
          </div>
          <div class="Login" @click="$router.push('/profile')">
            <span class="iconfont2 ">其他登陆方式</span>
          </div>
          <span class="smallText">注册账号></span>
        </div>

        <div v-else="!loginType">
          <input class="input" placeholder="请输入密码" style="font-size: 15px" type="password"/>
          <span class="is-left">忘记密码？</span>
          <span class="is-right"  @click="loginType=true">使用短信验证登录</span>
          <div class="Login">
            <span class="iconfont1" >登录</span>
          </div>
          <div class="Login" @click="$router.push('/profile')">
            <span class="iconfont2 ">其他登陆方式</span>
          </div>
          <span class="smallText">注册账号></span>
        </div>
    </div>

  </div>
</template>
<!--1.  :disabled="!isRightPhone" ,关键是：号
   如果不正确时，无法响应点击操作

   2.v-model="phone"
   用户输入，会时时记录，一开始为空  phone:''

   3.:class="{is_right_phone:isRightPhone}

     校验输入的手机号是否为11位数字，用计算属性
      验证是否是11位手机号（正则）
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
   4  设置is_right_phone字体颜色，由灰变黑

   5.事件回调函数在methods里写
   -->
<script type="text/ecmascript-6">
  export default {
    name: "PhoneLogin",
    data(){
      return{
        phone:'',//手机号一上来时是空的
        code:'',//一次性短信验证码
        computeTime:0 ,//倒计时一开始为0
        loginType:true //true短信验证，false密码登录

      }
    },
    computed:{
//      验证是否是11位手机号（正则）
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      sendCode(){
//        alert('请求发送验证码')
        //最大时间
         this.computeTime=30
        //循环定时器，每隔1秒减少1
        const IntervalId=setInterval(()=> {
           this.computeTime--
          //如果时间等于0时，清除定时器
          if (this.computeTime===0){
            clearInterval(IntervalId)
          }
        },1000)
      },


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .PhoneLogin
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
                  .btn
                      border 2px solid #333
                      color #eee
                      font-size 30px
                      border-radius 10px
                      background-color #ffffff
                      position absolute
                      right 40 px
                      top 500 px
                      outline:none
                      &.is_right_phone
                          color #000000
                  .is-left
                      display block
                      width 150px
                      height 100px
                      line-height 100px
                      text-align center
                      font-size 30px
                      color #333
                  .is-right
                      font-size 28px
                      color #333
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
                  .smallText
                         margin-left 40%
                         font-size 28px
                         color #333
</style>
