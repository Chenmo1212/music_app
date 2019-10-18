<template>
  <div>
    <!-- vue2.0 的限制，对于自定义组件的绑定事件需要加上 .native 修饰符-->
    <div class="box shadow padding-lg">12</div>
    <div class="bg-green round cu-btn">123s</div>
    <div class="cu-card-sm text-center" @click="setDat">我是toast</div>
    <div class="cu-btn" @click="setData">123</div>
  </div>
</template>
 
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "page-tab-container",
  data() {
    return {
      active: "tab-container1"
    };
  },
  methods: {
    ...mapActions(["setDialogToastContain"]),

    setDat() {
      this.setDialogToastContain("哈哈哈哈");
    },
    setData() {
      this.setDialogToastContain("登陆成功");
    }
  }
};
</script>
 
<style scoped lang="scss">
// 引入scss
@import "../scss/common.scss";
</style>
