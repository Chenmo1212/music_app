<template>
  <div id="home">
    <div class="w-9 margin-auto">
    <!-- swiper -->
    <div class="swipe-box shadow radius">
      <mt-swipe :auto="3000" :show-indicators="false">
        <mt-swipe-item @click.native="toSongList(1)" class="banner banner1 radius"></mt-swipe-item>
        <mt-swipe-item @click.native="toSongList(2)" class="banner banner2 radius"></mt-swipe-item>
        <mt-swipe-item @click.native="toSongList(3)" class="banner banner3 radius"></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- navbar -->
    <div class="navbar flex padding-bottom-xs w-10 text-gray text-sm underline">
      <div class="item margin-auto">
        <div class="icon icon1 h-sm w-sm margin-xs"></div>
        <div class="tit">推荐</div>
      </div>
      <div class="item margin-auto">
        <div class="icon icon2 h-sm w-sm margin-xs"></div>
        <div class="tit">下载榜</div>
      </div>
      <div class="item margin-auto">
        <div class="icon icon3 h-sm w-sm margin-xs"></div>
        <div class="tit">播放榜</div>
      </div>
    </div>
    <div class="main">
      <div class="header text-df h-lg flex lh-lg">
        <span class="line left bg-green"></span>
        <div class="flex right w-10">
          <span class="tit inline-block text-bold padding-left-xs">精选歌单</span>
          <span class="arrow inline-block h-xs w-xs bg-black margin-right-xs"></span>
        </div>
      </div>
      <div class="body">
        <div class="lists" v-for="(value, index) in lists">
          <div class="item w-10 h-xl flex">
            <div class="left bg-red w-lg h-lg radius shadow-lg">
              <img :src="value.imgUrl" alt="" class="h-10 w-10 radius">
            </div>
            <div class="right w-8 text-left">
              <div class="tit text-black text-df text-bold">{{value.tit}}</div>
              <div class="keywords text-sm text-gray">{{value.keywords}}</div>
              <div class="desc text-sm text-gray">{{value.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      lists: [{
        imgUrl: require("../../../assets/pic3.jpeg"),
        title: "华语经典",
        keywords: "华语|流行|怀旧",
        desc: "站在光阴的节点，轻抚岁月的痕迹"
      },{
        imgUrl: require("../../../assets/pic3.jpeg"),
        title: "怀旧的你",
        keywords: "90后|怀旧",
        desc: "闲暇细致的90后回忆杀"
      },{
        imgUrl: require("../../../assets/pic3.jpeg"),
        title: "华语经典",
        keywords: "华语|流行|怀旧",
        desc: "站在光阴的节点，轻抚岁月的痕迹"
      },{
        imgUrl: require("../../../assets/pic3.jpeg"),
        title: "华语经典",
        keywords: "华语|流行|怀旧",
        desc: "站在光阴的节点，轻抚岁月的痕迹"
      },{
        imgUrl: require("../../../assets/pic3.jpeg"),
        title: "怀旧的你",
        keywords: "90后|怀旧",
        desc: "闲暇细致的90后回忆杀"
      },{
        imgUrl: require("../../../assets/pic3.jpeg"),
        title: "华语经典",
        keywords: "华语|流行|怀旧",
        desc: "站在光阴的节点，轻抚岁月的痕迹"
      },
      ]
    };
  },
  methods: {
    ...mapActions(["setDialogToastContain"]),
    // 歌单详情
    toSongList(index) {
      this.setDialogToastContain("跳转歌单" + index);
    }
  }
};
</script>

<style lang="scss">
.swipe-box {
  margin: 1rem auto 0.5rem;
  height: 7.5rem;
  .banner1 {
      background: url(../../../assets/banner1.jpg) center center;
      background-size: 100%;
  }
  .banner2 {
      background: url(../../../assets/banner2.jpg) center center;
      background-size: 100%;
  }
  .banner3 {
      background: url(../../../assets/banner3.jpg) center center;
      background-size: 100%;
  }
}

.navbar {
    justify-content: space-between;
    align-items: center;
    .item {
      .icon1 {
        background: url(../../../assets/navbar1.png) center center;
        background-size: 100%;
      }
      .icon2 {
        background: url(../../../assets/navbar2.png) center center;
        background-size: 100%;
      }
      .icon3 {
        background: url(../../../assets/navbar3.png) center center;
        background-size: 100%;
      }
    }
}

.main {
  .header {
      justify-content: space-between;
      align-items: center;
      .left {
        width: 4px;
        height: 1rem;
      }
      .right {
        justify-content: space-between;
        align-items: center;
        .arrow {
            background: url(../../../assets/right.png) no-repeat;
            background-size: cover;
          }
      }
    }
    .body {
      .lists{
        .item {
          justify-content: space-between;
          align-items: center;
          .left {}
          .right {
            padding-left: 10px;
            .keywords {
              padding: 3px 0 3px;
            }
          }
        }
      }
    }
}
</style>