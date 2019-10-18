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
          <!-- 我的音乐 子组件-->
          <div class="h-xxl padding-xl">
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
            我的音乐
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2" class="bg-red">
          <!-- 歌单广场 子组件-->
          <div class="h-xxl padding-xl">
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
            歌单广场
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3" class="bg-grey padding-tb-xl">
          <!-- 搜索 子组件-->
          <div>
            搜索
            搜索
            搜索
            搜索
            搜索
            搜索
            搜索
            搜索
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "page-tab-container",
  data() {
    return {
      active: "tab-container1"
    };
  }
};
</script>
 
<style lang="scss" scoped>
.item {
  display: inline-block;
}

.nav {
  padding: 10px;
}

.link {
  color: inherit;
  padding: 20px;
  display: block;
}
</style>