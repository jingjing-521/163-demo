<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>

</template>

<script type="text/ecmascript-6">
  import {reqHomeData} from './api'
  import {mapState} from 'vuex'
    export default {
      name:'App',
      async mounted(){
       const result=await reqHomeData()
       console.log(result)

     }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
