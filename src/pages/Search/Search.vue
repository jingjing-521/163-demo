<template>
  <section class="search-container">
    <div class="search-title">
      <div class="search-input">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">瑞士制造 玫瑰腕表上新疯抢</span>
      </div>
      <button @click="$router.back()">取消</button>
    </div>
    <div class="search-list">
      <p>热门搜索</p>
      <ul>
        <li :class="{highlight: keywords.highlight === 1}" v-for="(keywords, index) in initSearchData.hotKeywordVOList" :key="index">
          <a href="javascript:void(0);">{{keywords.keyword}}</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    mounted () {
      this.$store.dispatch('getInitSearch');
    },
    computed: {
      ...mapState({
        initSearchData: state => state.search.initSearchData
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .search-container
    .search-title
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 30px
      box-sizing border-box
      .search-input
        flex 7
        height 56px
        border-radius 10px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      button
        flex 1
        height 40px
        margin-left 10px
        font-size 30px
        border none
        outline none
        background-color #fff
    .search-list
      clearFix()
      padding 0 30px 30px
      p
        width 690px
        height 90px
        font-size 28px
        color #999
        line-height 90px
      li
        float left
        height 48px
        line-height 48px
        border 1px solid #999
        margin 0 32px 32px 0
        a
          font-size 24px
          color #333
          padding 0 15px
        &.highlight
          border 1px solid $red
          a
            color $red
</style>
