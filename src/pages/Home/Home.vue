<template>
  <div class="homeContainer">
      <Header></Header>
      <!--轮播图-->
      <div class="top_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(i,index) in imgNodes" :key="index">
              <img  :src="i" alt="img"/>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
       <!--30天无理由退货-->
      <div class="ShopCartList">
          <span class="ShopCartItem">
           <img src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"/>
           网易自营品牌
          </span>
          <span class="ShopCartItem">
           <img src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png"/>
           30天无忧退货
          </span>
          <span class="ShopCartItem">
           <img src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png"/>
           48小时快速退款
          </span>
      </div>
       <!--商品小图列表-->
      <div class="homeShopList">
         <ul class="homeList">
           <li>
             <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"/>
              新品首发
           </li>

           <li>
             <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"/>
             居家生活
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/f90310e950469586307d8595d0ee9c81.png"/>
             服饰鞋包
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png"/>
             美食酒水
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
             个护清洁
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"/>
             母婴亲子
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"/>
             运动旅行
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"/>
             数码家电
           </li>
           <li>
             <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"/>
             全球特色
           </li>

           <li>
             <img src="https://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif"/>
             超级会员
           </li>
         </ul>
      </div>
      <!--新人专享礼-->
      <div class="newPersonModule">
         <span class="moduleTitle">-新人专享礼-</span>
         <a  class="left" href="javascript:;">新人专享礼包
           <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
         </a>
         <a class="m-activityItem">
           <div class="title">福利社</div>
           <div class="subTitle">今日特价</div>
           <img src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?imageView&thumbnail=200x200&quality=75">
         </a>

        <a class="m-activityRight">
          <div class="title">新人拼团</div>
          <div class="subTitle">1元起包邮</div>
          <img src="http://yanxuan.nosdn.127.net/8ea31d3ee1482b67ed7102332019e0da.png?imageView&thumbnail=200x200&quality=75">
        </a>


      </div>
      <!--品牌制造商直供-->
      <div class="m-indexManufacturersSupplying">
        <div class="moduleTitle">
           <div class="leftName">品牌制造商直供</div>
           <a class="rightName" href="javascript:;">
             更多
             <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png"/>
           </a>
        </div>
        <ul class="List">
          <li class="ItemA">
            <a href="javascript:;">
                <img src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"/>
                <span class="title">海外制造商</span>
                <p>9.9元起
                <span>上新</span>
                </p>
            </a>
          </li>

          <li class="ItemB">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1"/>
              <span class="title">CK制造商</span>
              <p>29.9元起</p>
            </a>
          </li>

          <li class="ItemC">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1"/>
              <span class="title">新秀丽制造商</span>
              <p>34.9元起</p>
            </a>
          </li>

          <li class="ItemD">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1"/>
              <span class="title">Nine West制造商</span>
              <p>219元起</p>
            </a>
          </li>
        </ul>

      </div>
      <!--类目热销榜-->
      <div class="m-categoryHotSellModule">
          <div class="leftName">
            <span>类目热销榜</span>
          </div>
          <div class="item-big">
              <div class="item-1">
                 <span>热销榜</span>
                 <p></p>
                 <img src="https://yanxuan.nosdn.127.net/ac5f8cf50f46e1b6f758b15e22f8b805.png?imageView&quality=65&thumbnail=200x200"/>
              </div>
              <div class="item-2">
                <span>好评榜</span>
                <p></p>
                <img src="https://yanxuan.nosdn.127.net/f6116ce57c2173e4775d3c902cfb0d4b.png?imageView&quality=65&thumbnail=200x200"/>
              </div>
          </div>
          <div class="navList">
              <ul class="navItems">
                <li>
                  居家生活榜
                  <img src="https://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png?imageView&quality=65&thumbnail=200x200"/>
                </li>

                <li>
                  服饰鞋包榜
                  <img src="https://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&quality=65&thumbnail=200x200"/>

                </li>

                <li>
                  美食酒水榜
                  <img src="https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200"/>
                </li>

                <li>
                  个护清洁榜
                  <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=200x200"/>
                </li>

                <li>
                  数码家电榜
                  <img src="https://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?imageView&quality=65&thumbnail=200x200"/>
                </li>

                <li>
                  运动旅行榜
                  <img src="https://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png?imageView&quality=65&thumbnail=200x200"/>
                </li>

                <li>
                  母婴亲子榜
                  <img src="https://yanxuan.nosdn.127.net/de44bd49514fcfe4a915cbd901a94016.png?imageView&quality=65&thumbnail=200x200"/>
                </li>

                <li>
                  全球特色榜
                  <img src="https://yanxuan.nosdn.127.net/e3a108207eb1c518d84b5f24ff6627a3.png?imageView&quality=65&thumbnail=200x200"/>
                </li>
              </ul>
        </div>

      </div>
      <!--人气推荐-->
      <div class="m-popularItemModule">
          <div class="moduleTitle">
             <div class="leftName">人气推荐</div>
             <a class="rightName" href="javascript:;">
             更多
             <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png"/>
             </a>
          </div>
          <div class="spItem">
             <img src="https://yanxuan.nosdn.127.net/15a8238082563e743269de33a2b102c6.png?imageView&quality=65&thumbnail=280x280"/>
             <span class=" tag-status-new">超级闪购</span>
             <div class="name">超冷感吸放湿双面夏凉被...</div>
             <div class="desc">冷感+亲肤，享受双面睡感</div>
             <span class="price">¥199</span>
          </div>
          <div class="m-indexItem ">
            <ul class="list">
              <li class="item">
                  <img src="https://yanxuan.nosdn.127.net/042fa68e8179420a9203436256b14a01.png?imageView&quality=65&thumbnail=330x330"/>
                  <span class="newItemDesc">九制黑芝麻丸</span>
                  <p>¥68.8</p>
                  <span class=" tag-status-new1">超级闪购</span>
              </li>

              <li class="item">
                <img src="https://yanxuan.nosdn.127.net/1770b0b67e511b03c56be97131e18816.png?imageView&quality=65&thumbnail=330x330"/>
                <span class="newItemDesc">男士新疆长绒棉POLO衫</span>
                <p>¥71</p>
                <span class=" tag-status-new2">夏季特惠</span>
              </li>

              <li class="item">
                <img src="https://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?imageView&quality=65&thumbnail=330x330"/>
                <span class="newItemDesc">24寸 纯PC“铝框”（非...</span>
                <p>¥429</p>
                <span class=" tag-status-new3">每满199减30券</span>
              </li>
            </ul>
          </div>
      </div>
      <!--限时购-->
      <div class="m-flashSaleModule">
           <div class="moduleTitle">
                <div class="leftName">限时购
                  <span>00</span>:
                  <span>16</span>:
                  <span>40</span>
                </div>
                <a class="rightName" href="javascript:;">
                更多
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png"/>
                </a>
           </div>
           <div class="navList">
                <ul class="navItems">
                  <li>
                    <img src="https://yanxuan.nosdn.127.net/91605fb097deb315f659f2cc606af471.png?imageView&thumbnail=216x216&quality=75"/>
                    <span class="left">¥99</span>

                  </li>

                  <li>
                    <img src="https://yanxuan.nosdn.127.net/294f5da2e345b6e8e135627858e7e894.png?imageView&thumbnail=216x216&quality=75"/>
                    <span class="left">¥99</span>
                  </li>

                  <li>
                    <img src="https://yanxuan.nosdn.127.net/8fcec9c24b63aa7e18d5bd8138cb72cb.png?imageView&thumbnail=216x216&quality=75"/>
                    <span class="left">¥19</span>
                  </li>

                  <li>
                    <img src="https://yanxuan.nosdn.127.net/6e05a3a46a46a34e7fa5b86c122a0787.png?imageView&thumbnail=216x216&quality=75"/>
                    <span class="left">¥79</span>
                  </li>

                  <li>
                    <img src="https://yanxuan.nosdn.127.net/e2df90709aa668ff5b1b7c71be8549fc.png?imageView&thumbnail=216x216&quality=75"/>
                    <span class="left">¥19</span>
                  </li>

                  <li>
                    <img src="https://yanxuan.nosdn.127.net/62001dabfba123477ce4bc7adf6c5879.png?imageView&thumbnail=216x216&quality=75"/>
                    <span class="left">¥99</span>
                  </li>

                </ul>
        </div>
      </div>
      <!--新品首发-->
      <div class="m-newItemModule">
        <div class="moduleTitle">
          <div class="leftName">新品首发</div>
          <a class="rightName" href="javascript:;">
            更多
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png"/>
          </a>
        </div>
        <div class="m-indexItem ">
          <ul class="list">
            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/c64687298e8a1ca618f35022184e6aea.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">烟台美早大樱桃 2斤装</span>
              <p>¥98</p>
              <span class=" tag-status-new1">好货内部价</span>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/1f675aedde1e884a413b5ccf4546e372.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">趣凡· 真皮电动功能床</span>
              <p>¥4999</p>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/b9cda216c597fd2297432a893d3da371.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">美国tezewa筋膜放松按...</span>
              <p>¥1699</p>
              <span class=" tag-status-new2">满赠</span>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">英国摩飞便携式榨汁杯</span>
              <p>¥199</p>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/8c412d74b3721d61c5000dcd37966d49.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">男式桑蚕丝棉针织POLO衫</span>
              <p>¥399</p>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/d5325b2841aeb11423704be19e8fb230.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">Yessing活力吃货男女...</span>
              <p>¥159</p>
            </li>
          </ul>
        </div>

      </div>
      <!--性价比之王-->
      <div class="m-sceneLightShoppingGuideModule">
        <div class="m-styleBanner">
          <span class="title">性价比之王</span>
          <p class="desc">品质惊人的良心替代</p>
          <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75"/>
          <img src="https://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75"/>
        </div>

        <div class="m-styleBanner">
          <span class="title">无限回购榜单</span>
          <p class="desc">快消日用 超值5.9元起</p>
          <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75"/>
          <img src="https://yanxuan.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&thumbnail=150x150&quality=75"/>
        </div>

        <div class="m-styleBanner">
          <span class="title">断货补单王</span>
          <p class="desc">严选必买爆款</p>
          <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&thumbnail=150x150&quality=75"/>
          <img src="https://yanxuan.nosdn.127.net/6463c70f8b50bd14fd49d1f5903c06ec.png?imageView&thumbnail=150x150&quality=75"/>
        </div>

        <div class="m-styleBanner">
          <span class="title">双料口碑爆品榜</span>
          <p class="desc">高销量高好评好物</p>
          <img src="https://yanxuan.nosdn.127.net/bbdbfc9d084e0188af383ff9255a4cc1.png?imageView&thumbnail=150x150&quality=75"/>
          <img src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&thumbnail=150x150&quality=75"/>
        </div>
      </div>
       <!--图片-->
      <div class="bigImg1">
         <img src="https://yanxuan.nosdn.127.net/80d36dc509fed483bb0863b5895b1d44.jpg?imageView&thumbnail=750x0&quality=75"/>
      </div>
       <!--轮播1-->
      <div class="swiper-container1">
        <div class="m-indexItem ">
          <ul class="list">
            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/c64687298e8a1ca618f35022184e6aea.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">烟台美早大樱桃 2斤装</span>
              <p>¥98</p>
              <span class=" tag-status-new1">好货内部价</span>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/1f675aedde1e884a413b5ccf4546e372.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">趣凡· 真皮电动功能床</span>
              <p>¥4999</p>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/b9cda216c597fd2297432a893d3da371.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">美国tezewa筋膜放松按...</span>
              <p>¥1699</p>
              <span class=" tag-status-new2">满赠</span>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/75ce66f46c287cc512749f9e8328f0b3.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">英国摩飞便携式榨汁杯</span>
              <p>¥199</p>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/8c412d74b3721d61c5000dcd37966d49.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">男式桑蚕丝棉针织POLO衫</span>
              <p>¥399</p>
            </li>

            <li class="item">
              <img src="https://yanxuan.nosdn.127.net/d5325b2841aeb11423704be19e8fb230.png?imageView&quality=65&thumbnail=330x330"/>
              <span class="newItemDesc">Yessing活力吃货男女...</span>
              <p>¥159</p>
            </li>
          </ul>
        </div>
      </div>
      <!--图片-->
      <div class="bigImg2">
        <img src="https://yanxuan.nosdn.127.net/cdb242a66d17818f3672aa12049132ec.jpg?imageView&thumbnail=750x0&quality=75"/>
      </div>
      <!--轮播2-->
      <div class="swiper-container2">
      </div>
      <!--图片-->
      <div class="bigImg3">
        <img src="https://yanxuan.nosdn.127.net/281abc2c55bc74b5a4fd4b6fd3179e84.jpg?imageView&thumbnail=750x0&quality=75"/>
      </div>
      <!--轮播3-->
      <div class="swiper-container3">
      </div>
     <!--首页收尾-->
      <div class="m-ftWrap">
           <span class="is-left">
             下载App
           </span>
           <span  class="is-right">
             电脑版
           </span>

           <p class="is-top">网易公司版权所有 © 1997-2019</p>
           <p class="is-bottom">食品经营许可证：JY13301080111719</p>

      </div>

  </div>

</template>

<script>
  import "../../common/swiper/swiper.css"
  import Swiper from "swiper"

  export default {
    name: 'Home',
    data () {
      return {
//        轮播图图片
        imgNodes: ['https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/cfdb199489776e89c782eae519645f2f.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/82f1d71773bfd416da55e7facb155b8d.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/68f443a9bcc78b0c46a414a633f66c47.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/cfa93449e6deef735fc746c7aa39b96f.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/931e7f847284a387d4725c9409383814.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },
    mounted() {
//      swiper,js代码
      new Swiper('.top_swiper .swiper-container', {
        autoplay: true,    //可选选项，自动滑动
        loop: true,
        pagination: {
          el: '.top_swiper .swiper-pagination',
          type: 'custom',
          clickable: true,
          // 自定义分页器
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml;
          }
        },
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
      .top_swiper
        .swiper-container
          margin-top  150px
          width 100%
          height 367.5px
          font-size 200px
          .swiper-slide
            position relative
            img
              width 100%
              height auto
              position absolute
              left 0
              top 50%
              transform: translateY(-50%)
      .ShopCartList
          height 72px
          display flex
          justify-content space-between
          align-items center
          padding 30px
          box-sizing border-box
          color: #B4282D

          img
            vertical-align middle
            width 32px
            height 32px
      .homeShopList
           width 100%
           display flex
           .homeList
               width 100%
               height 372.97px
               /*background-color pink*/
               display flex
               justify-content space-around
               flex-wrap wrap
               border-bottom 18px solid #eee


               li
                    padding   10px
                    width 110px
                    height 156px
                    font-size 24px
                    color #333333
                    overflow hidden

                    img
                       width 110px
                       height 110px




      .newPersonModule
           width 100%
           height 557.97px
           padding  0px 30px
           box-sizing border-box
           position relative
           border-bottom 18px solid #eee
           .moduleTitle
                display block
                width 100%
                height 90px
                line-height 90px
                text-align center
                font-size 32.003px

           .left
                display inline-block
                width 342.98px
                height 430px
                background-color #F9E9CF
                font-size 33px
                color #333
                padding 30px 0 0 20px
                margin 0px 3.99975px 0px 0px
                box-sizing border-box
                img
                   margin 30px
                   width 258px
                   height 257px
           .m-activityItem
                width 342.98px
                height 215px
                float right
                background-color #F9E9CF
                color #333
                padding 20px 0 0px 30px
                box-sizing border-box
                .title
                  font-size 32.0003px
                .subTitle
                  display inline-block
                  font-size 24px
                  color #7F7F7F
                img
                   float right
                   width 200px
                   height 200px
           .m-activityRight
              width 342.98px
              height 215px
              float right
              background-color #F9E9CF
              color #333
              padding 20px 0 0px 30px
              box-sizing border-box
              position absolute
              bottom  18px
              right  30px
              .title
                font-size 32.0003px
                color #333

              .subTitle
                width 135.17px
                height 32px
                background: #CBB693;
                font-size 24px
                color #ffffff
                padding 0px 9.99975px
                margin-top 10px
                box-sizing border-box
              img
                position absolute
                right -20px
                bottom 0px
                width 200px
                height 200px
      .m-indexManufacturersSupplying
             width 100%
             height 681.95px
             padding 0px 30px
             box-sizing border-box
             background-color #ffffff
             border-bottom 18px solid #eee
             .moduleTitle
                  width 100%
                  height 99.98px
                  background-color #ffffff
                  color #333
                  line-height 99.98px
                  text-align center
                  .leftName
                       font-size 32.0003px
                       float left
                  .rightName
                       font-size 27.9998px
                       color #333
                       float right
                       img
                          width 12.98px
                          height 23px
             .List
                  height 553.97px
                  width 100%
                  position relative
                  display flex
                  justify-content space-between
                  align-items center
                  flex-wrap wrap
                  .ItemA
                       width 342.98px
                       height 260px
                       background-color #F4FAFA
                       img
                          width 342.98px
                          height 260px
                       .title
                          font-size 27.9998px
                          color #333
                          position absolute
                          left 110px
                          top 20px
                       p
                          font-size 24px
                          color #7F7F7F
                          margin-top 5px
                          position absolute
                          left 110px
                          top 50px
                          span
                              width 75.98px
                              height 32px
                              line-height 32px
                              text-align enter
                              background-color #CBB693
                              color #ffffff
                              margin-left 5px



                  .ItemB
                       width 342.98px
                       height 260px
                       background-color #F4FAFA
                       img
                         width 342.98px
                         height 260px
                       .title
                         font-size 27.9998px
                         color #333
                         position absolute
                         right  110px
                         top 20px
                       p
                         font-size 24px
                         color #7F7F7F
                         margin-top 5px
                         position absolute
                         right  110px
                         top 50px
                         span
                           width 75.98px
                           height 32px
                           line-height 32px
                           text-align enter
                           background-color #CBB693
                           color #ffffff
                           margin-left 5px



                  .ItemC
                        width 342.98px
                        height 260px
                        background-color #F4FAFA
                        img
                          width 342.98px
                          height 260px
                        .title
                          font-size 27.9998px
                          color #333
                          position absolute
                          left 100px
                          top: 300px
                        p
                          font-size 24px
                          color #7F7F7F
                          margin-top 5px
                          position absolute
                          left 110px
                          top 330px
                          span
                            width 75.98px
                            height 32px
                            line-height 32px
                            text-align enter
                            background-color #CBB693
                            color #ffffff
                            margin-left 5px



                  .ItemD
                        width 342.98px
                        height 260px
                        background-color #F4FAFA
                        img
                          width 342.98px
                          height 260px
                        .title
                          font-size 27.9998px
                          color #333
                          position absolute
                          right  60px
                          top 300px
                        p
                          font-size 24px
                          color #7F7F7F
                          margin-top 5px
                          position absolute
                          right 110px
                          top 330px
                          span
                            width 75.98px
                            height 32px
                            line-height 32px
                            text-align enter
                            background-color #CBB693
                            color #ffffff
                            margin-left 5px





      .m-categoryHotSellModule
              width 100%
              height 709.94px
              padding 0px 30px
              box-sizing border-box
              background-color #ffffff
              border-bottom 15px solid #eee
              .leftName
                    width 100%
                    height 99.98px
                    background-color #ffffff
                    color #333
                    line-height 99.98px
                    text-align center
                    font-size 32.0003px
                    span
                        float left
              .item-big
                     width 100%
                     height 200px

                     position relative
                     display flex
                     justify-content space-between
                     .item-1
                            width 339.98px
                            height 200px
                            color #333
                            font-size 26px
                            background-color #F9F3E4
                            span
                                position absolute
                                left 30px
                                top 70px
                            p
                              width 48px
                              height 3.98px
                              background-color #333
                              position absolute
                              left 30px
                              top 115px

                            img
                               width 200px
                               height 200px
                               float right


                     .item-2
                            width 339.98px
                            height 200px
                            color #333
                            font-size 26px
                            background-color #EBEFF6
                            span
                              position absolute
                              left 380px
                              top 70px
                            p
                              width 48px
                              height 3.98px
                              background-color #333
                              position absolute
                              left 380px
                              top 115px
                            img
                              width 200px
                              height 200px
                              float right
              .navList
                    width 100%
                    display flex
                    .navItems
                        display flex
                        justify-content space-between
                        align-items center
                        flex-wrap wrap
                        li
                          width 165px
                          height 180px
                          text-align center
                          color #333
                          font-size 24px
                          background-color #F5F5F5
                          border-top 10px solid #ffffff
                          border-radius 5px
                          padding-top 10px
                          box-sizing border-box
                          img
                             width 120px
                             height 120px
      .m-popularItemModule
             width 100%
             height 783.92px
             padding 0px 30px
             box-sizing border-box
             background-color #ffffff
             border-bottom 15px solid #eee

             .moduleTitle
                  width 100%
                  height 99.98px
                  background-color #ffffff
                  color #333
                  line-height 99.98px
                  text-align center
                  .leftName
                    font-size 32.0003px
                    float left
                  .rightName
                    font-size 27.9998px
                    color #333
                    float right
                    img
                      width 12.98px
                      height 23px
             .spItem
                  width 690px
                  height 279.98px
                  background-color #FEF0DF
                  margin-bottom 20px
                  position relative
                  img
                     width 279.98px
                     height 279.98px
                     margin-right 20px
                  .tag-status-new
                      position absolute
                      top 50px
                      left 300px
                      color #B4282D
                      border 1px solid #B4282D
                      font-size 10px
                      background-color #fff
                      padding 0 8px
                  .name
                       font-size 25px
                       color #333
                       position absolute
                       left 300px
                       top 90px
                  .desc
                       font-size 20px
                       color #7F7F7F
                       position absolute
                       left 300px
                       top 120px

                  .price
                       color #b4282d
                       position absolute
                       left 300px
                       top 160px


             .m-indexItem
                   width 100%
                   height 353.95px
                   display flex
                   position relative
                   .list
                       width 100%
                       height 100%
                       display flex
                       justify-content space-between
                       align-items center
                       .item
                             width 216px
                             height 353.95px
                             img
                                width 216px
                                height 216px
                                background-color #f5f5f5

                             .newItemDesc
                                  font-size 24px
                                  color #333
                              p
                               display inline-block
                               font-size 24px
                               color #b4282d
                             .tag-status-new1
                                  position absolute
                                  top 270px
                                  left 50px
                                  color #B4282D
                                  border 1px solid #b4282d
                                  font-size 10px
                                  background-color #fff
                                  padding 0 8px

                             .tag-status-new2
                                 position absolute
                                 top 280px
                                 left 280px
                                 color #B4282D
                                 border 1px solid #b4282d
                                 font-size 10px
                                 background-color #fff
                                 padding 0 8px

                             .tag-status-new3
                                  position absolute
                                  top 280px
                                  right  30px
                                  color #B4282D
                                  border 1px solid #b4282d
                                  font-size 10px
                                  background-color #fff
                                  padding 0 8px

      .m-flashSaleModule
            width 100%
            height 697.98px
            padding 0 30px
            border-bottom 15px solid #eee
            box-sizing border-box
            .moduleTitle
                width 100%
                height 99.98px
                background-color #ffffff
                color #333
                line-height 99.98px
                text-align center
                .leftName
                  font-size 32.0003px
                  float left
                  span
                      width 30px
                      height 30px
                      background-color #333
                      color #fff
                .rightName
                  font-size 27.9998px
                  color #333
                  float right
                img
                  width 12.98px
                  height 23px
            .navList
              width 100%
              display flex
              .navItems
                display flex
                justify-content space-between
                align-items center
                flex-wrap wrap
                li
                  width 216px
                  height 299px
                  color #b4282d
                  text-align center
                  img
                     width 216px
                     height 216px
                     background-color #f5f5f5
                     margin-bottom  20px

      .m-newItemModule
            width 100%
            height 833.89px
            padding 0 30px
            border-bottom 15px solid #eee
            box-sizing border-box
            background-color #ffffff
            .moduleTitle
              width 100%
              height 99.98px
              background-color #ffffff
              color #333
              line-height 99.98px
              text-align center
              .leftName
                font-size 32.0003px
                float left
              .rightName
                font-size 27.9998px
                color #333
                float right
              img
                width 12.98px
                height 23px
            .m-indexItem
                width 100%
                height 707.91px
                display flex
                position relative
                .list
                     width 100%
                     height 100%
                     display flex
                     flex-wrap wrap
                     justify-content space-between
                     align-items center
                     .item
                          width 216px
                          height 336.98px
                          img
                             width 216px
                             height 216px
                             background-color #f5f5f5
                             margin-bottom 10px
                          .newItemDesc
                               font-size 24px
                               color #333
                          p
                           color #b4282d
                           font-size 24px
                           display inline-block
                          .tag-status-new1
                                position absolute
                                top 290px
                                left 0px
                                color #B4282D
                                border 1px solid #b4282d
                                font-size 12px
                                padding 0 12px
                                box-sizing border-box
                                background rgba(255,255,255,.9)

                          .tag-status-new2
                             position absolute
                             top 290px
                             right 140px
                             color #B4282D
                             border 1px solid #b4282d
                             font-size 12px
                             padding 0 12px
                             box-sizing border-box
                             background rgba(255,255,255,.9)





      .m-sceneLightShoppingGuideModule
             width 100%
             height 575.95px
             padding 9.99975px 30px 30px 26.0002px
             background-color #ffffff
             box-sizing border-box
             border-bottom 15px solid #eee
             .m-styleBanner
                   width 342.98px
                   height 264px
                   background-color #F5F5F5
                   margin 3.99975px 0 0 3.99975px
                   padding 20px 0 0 20px
                   box-sizing border-box
                   float left

                   .title
                         font-size 32.0003px
                         color #333
                   .desc
                        margin-top 10px
                        font-size 24px
                        color #7f7f7f
                   img
                       width 150px
                       height 150px


      .bigImg1
            width 100%
            height 369.98px
            border-bottom 15px solid #fff
            img
               width 100%
               height 100%
      .swiper-container1
             width 100%
             height 390.97px
             background-color pink
             padding 0 30px 30px
             box-sizing border-box
             border-bottom 15px solid #eee
             overflow hidden
             .m-indexItem
                width 100%
                height 100%
                display flex
                position relative
                .list
                  width 100%
                  height 100%
                  display flex
                  flex-wrap nowrap
                  align-items center
                  justify-content space-between
                  .item
                    width 200px
                    height 360.97px
                    img
                      width 200px
                      height 200px
                      background-color #f5f5f5
                      margin-bottom 10px
                    .newItemDesc
                      font-size 24px
                      color #333
                    p
                      color #b4282d
                      font-size 24px
                      display inline-block
                    .tag-status-new1
                      position absolute
                      top 290px
                      left 0px
                      color #B4282D
                      border 1px solid #b4282d
                      font-size 12px
                      padding 0 12px
                      box-sizing border-box
                      background rgba(255,255,255,.9)

                    .tag-status-new2
                      position absolute
                      top 290px
                      right 140px
                      color #B4282D
                      border 1px solid #b4282d
                      font-size 12px
                      padding 0 12px
                      box-sizing border-box
                      background rgba(255,255,255,.9)




      .bigImg2
            width 100%
            height 369.98px
            border-bottom 15px solid #fff
            img
              width 100%
              height 100%
      .swiper-container2
              width 100%
              height 390.97px
              background-color yellowgreen
              padding 0 30px 30px
              box-sizing border-box
              border-bottom 15px solid #eee
      .bigImg3
            width 100%
            height 369.98px
            border-bottom 15px solid #fff
            img
              width 100%
              height 100%
      .swiper-container3
            width 100%
            height 390.97px
            background-color yellowgreen
            padding 0 30px 30px
            box-sizing border-box
            border-bottom 15px solid #eee
      .m-ftWrap
            width 100%
            height 250px
            background-color #333
            margin-bottom 100px
            position relative
            .is-left
                display block
                width 171.98px
                height 62px
                line-height 62px
                text-align center
                background-color #333
                border 1px solid #999
                color #ffffff
                position absolute
                left 180px
                top 50px

            .is-right
                display block
                width 171.98px
                height 62px
                border 1px solid #999
                line-height 62px
                text-align center
                background-color #333
                color #ffffff
                position absolute
                left 410 px
                top 50px
            p
              font-size 24px
              color #999
             .is-top
                position absolute
                left 200px
                top 150px
             .is-bottom
                position absolute
                left 180px
                top 180px


</style>

<!--自定义分页样式-->
<style>
  /* 注意： 不能在 scoped 中写轮播图的样式 */
  /* 自定义分页器的样式，这个你自己想要什么样子自己写 */
  .swiper-pagination-customs {
    width: 40px;
    height: 4px;
    display: inline-block;
    background: #fff;
    opacity: 0.4;
    border-radius: 0;
    margin: 0 10px 0 0;
  }

  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #f00;
    border-radius: 0;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #333;
    border: none;
    vertical-align: middle;
  }

  .swiper-pagination-bullet-active {
    border: none;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 12px;
    height: 12px;
  }
</style>
