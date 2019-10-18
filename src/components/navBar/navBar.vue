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
      <div
        :class="active === 'tab-container3' ? 'fl h-10 icon checked' : 'fl h-10 icon '"
        @click="active = 'tab-container3'"
      >搜索</div>
      <div class="fl h-10 avatar">头像</div>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1" class="bg-green padding-tb-xl">
          <!-- 我的音乐 调用子组件-->
          <mine></mine>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2" class="bg-red">
          <!-- 歌单广场 调用子组件-->
          <home></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3" class="bg-grey padding-tb-xl">
          <!-- 搜索 调用子组件-->
          <search></search>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
// 引入子组件
import mine from "./children/mine";
import home from "./children/home";
import search from "./children/search";
export default {
  name: "navbar",
  data() {
    return {
      active: "tab-container1"
    };
  },
  // 声明子组件
  components: {
    search,
    mine,
    home
  }
};
</script>

<style lang="scss">
.navBar {
  overflow: hidden;
}
</style>