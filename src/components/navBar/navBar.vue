<template>
  <div>
    <div class="navBar-box fixed top-0 w-10 bg-white">
      <!-- vue2.0 的限制，对于自定义组件的绑定事件需要加上 .native 修饰符-->
    <div class="navBar text-gray cf h-lg shadow" v-if="this.$route.name === 'home'">
      <div
        :class="active === 'tab-container1' ? 'fl h-10 menu1 checked text-black' : 'fl h-10 menu1 '"
        @click="active = 'tab-container1'"
      >我的音乐</div>
      <div
        :class="active === 'tab-container2' ? 'fl h-10 menu2 checked text-black' : 'fl h-10 menu2 '"
        @click="active = 'tab-container2'"
      >歌单广场</div>

      <!-- 路由跳转 -->
      <router-link class="fl h-10 search text-gray relative" :to="{name: 'search'}">
        <img src="../../assets/search.png" alt="搜索" class="icon absolute" />
      </router-link>

      <!-- Todo: 我的资料 -->
      <div class="fl h-10 avatar lh-xl" @click="mine">
        <img :src="imgUrl" alt="搜索" class="icon inline-block shadow radius-5 h-6" />
      </div>
    </div>
    </div>

    <!-- tab container -->
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" :swipeable="swipeable">
        <mt-tab-container-item id="tab-container1" class=" padding-tb-lg">
          <!-- 我的音乐 调用子组件-->
          <mine></mine>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2" class>
          <!-- 歌单广场 调用子组件-->
          <home></home>
        </mt-tab-container-item>
        <!-- <mt-tab-container-item id="tab-container3" class="bg-grey padding-tb-xl">
          <search></search>
        </mt-tab-container-item>-->
      </mt-tab-container>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// 引入子组件
import mine from "./children/mine";
import home from "./children/home";
// import search from "./children/search";
export default {
  name: "navbar",
  data() {
    return {
      active: "tab-container1",
      imgUrl: require("../../assets/avatar.jpg"),
      swipeable: false,
    };
  },
  // 声明子组件
  components: {
    // search,
    mine,
    home
  },
  created(){
    // 定义变量获取屏幕视口宽度
    var windowWidth = document.body.clientWidth ;
    var screenWidth = window.screen.width ;
    // windowWidth < 450 ? this.swipeable = true : this.swipeable = false;
    // 根据屏幕宽度决定是否允许滑动
    this.swipeable = (windowWidth < 450);
    // 如果是ipad，允许滑动
    if(screenWidth < 1024) this.swipeable = true;
  },
  computed: {
    ...mapState(["dialogToastContain"])
  },
  methods: {
    ...mapActions(["setDialogToastContain"]),
    mine() {
      this.setDialogToastContain("开发狮有点懒~");
    }
  }
  // watch: {
  //   $route(to, from) {
  //     console.log(to.meta.index, from.meta.index);
  //     if (to.meta.index > from.meta.index) {
  //       this.transitionName = "slide-left";
  //     } else {
  //       this.transitionName = "slide-right";
  //     }
  //   }
  // }
};
</script>

<style lang="scss">
html::-webkit-scrollbar {display:none}

.navBar-box {
  z-index: 9999;
  max-width: 450px;
.navBar {
  line-height: 3rem;
  font-size: 0.7rem;
  overflow: hidden;
  .menu1,
  .menu2 {
    margin-left: 10%;
  }
  .menu2 {
    margin-right: 10%;
  }
  .search {
    width: 10%;
    margin-right: 5%;
    .icon {
      height: 1rem;
      top: 0.9rem;
      left: 0;
    }
  }
  .checked {
    font-size: 0.8rem;
    font-weight: 700;
  }
}
}
.page-tab-container {
  padding-top: 3rem;
}

.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.4s;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>