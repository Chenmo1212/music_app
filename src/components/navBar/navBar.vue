<template>
  <div>
    <!-- vue2.0 的限制，对于自定义组件的绑定事件需要加上 .native 修饰符-->
    <div class="navBar text-gray cf h-lg shadow" v-if="this.$route.name === 'home'">
      <div
        :class="active === 'tab-container1' ? 'fl h-10 menu1 checked' : 'fl h-10 menu1 '"
        @click="active = 'tab-container1'"
      >我的音乐</div>
      <div
        :class="active === 'tab-container2' ? 'fl h-10 menu2 checked' : 'fl h-10 menu2 '"
        @click="active = 'tab-container2'"
      >歌单广场</div>

      <!-- 路由跳转 -->
      <transition :name="transitionName">
        <keep-alive include="home">
          <router-link class="fl h-10 search text-gray relative" :to="{name: 'search'}">
            <img src="../../assets/search.png" alt="搜索" class="icon absolute" />
          </router-link>
        </keep-alive>
      </transition>

      <!-- Todo: 我的资料 -->
      <div class="fl h-10 avatar lh-xl ">
        <img :src="imgUrl" alt="搜索" class="icon inline-block shadow radius-5  h-6" />
      </div>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1" class="bg-green padding-tb-xl">
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
      imgUrl: require('../../assets/avatar.jpg'),
    };
  },
  // 声明子组件
  components: {
    // search,
    mine,
    home
  },
  computed: {
    ...mapState(["dialogToastContain","transitionName"])
  },
  methods: {
    ...mapActions(["setDialogToastContain", "setTransitionName"])
  },
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
// 主题色
$red: #fe5a5b;
$green: #5de4c3;
$blue: #44afe7;
$grey: #999999;
$black: #091314;

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
    color: $black;
    font-weight: 700;
  }
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