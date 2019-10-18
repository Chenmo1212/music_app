<template>
  <div>
    <!-- vue2.0 的限制，对于自定义组件的绑定事件需要加上 .native 修饰符-->
    <div class="nav cf h-df">
      <!-- <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>-->

      <div class="local text-black text-df fl w-3" @click="active = 'tab-container1'">我的音乐</div>
      <div class="local text-black text-df fl w-3" @click="active = 'tab-container2'">菜单广场</div>
      <div class="local text-black text-df fl w-1" @click="active = 'tab-container3'">搜索</div>
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

<style>
</style>