<template>
  <div id="app">
    <!-- toast -->
    <div class="toastBox block text-white">
      <div class="toast inline-block a-fadeInUp" v-show="toastShow" id="toast">{{toastText}}</div>
    </div>
    <!-- header -->
    <!-- <div class="header h-lg bg-white shadow text-sm">
      <div class="navBar text-gray cf h-10">
        <div class="fl h-10 menu1 checked">我的音乐</div>
        <div class="fl h-10 menu2">歌单广场</div>
        <div class="fl h-10 icon">搜索</div>
        <div class="fl h-10 avatar">头像</div>
      </div>
    </div>-->
    <!-- 路由页面 -->
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      toastShow: false,
      toastText: ""
    };
  },
  computed: {
    ...mapState(["dialogToastContain"])
  },
  methods: {
    ...mapActions(["setDialogToastContain"]),

    // toast
    showToast() {
      // console.log(this.toastShow, '')
      if (this.toastShow) return;
      if (this.dialogToastContain !== "") {
        document.getElementById("toast").className = "toast a-fadeInUp";
        let v = this;
        v.toastText = this.dialogToastContain;
        v.toastShow = true;
        clearTimeout(timeId); // 清除定时器
        let timeId = setTimeout(function() {
          // 添加退出类名
          document.getElementById("toast").className =
            "toast a-fadeInUp a-fadeOut";
          // 0.2秒后关闭toast
          clearTimeout(timeId2);
          let timeId2 = setTimeout(function() {
            v.toastShow = false;
            v.setDialogToastContain("");
          }, 200);
        }, 1500);
      }
    }
  },
  created() {},
  watch: {
    // 监听dialog-Toast内容变化
    dialogToastContain: function() {
      this.showToast();
    }
  }
};
</script>

<style lang="scss">
// 引入外部样式
@import "./css/normalize.css";
@import "./css/common.css";
@import "mint-ui/lib/style.css";
// 主题色
$red: #fe5a5b;
$green: #5de4c3;
$blue: #44afe7;
$grey: #999999;
$black: #091314;

html {
  font-size: 20px; // 1rem = 20px;
}

#app {
  max-width: 450px;
  margin: 0 auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  color: #2c3e50;
  min-height: 100vh;
}

.toastBox {
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 15%;
  // background-color: #eeeeee;
  width: 100%;
  max-width: 450px;
  z-index: 20;
  .toast {
    display: inline-block;
    margin: 0 auto;
    border-radius: 5px;
    background: rgba(17, 17, 17, 0.7);
    padding: 0.5rem 1rem;
    max-width: 8rem;
    font-size: 0.8rem;
  }
}

.navBar {
  line-height: 3rem;
  font-size: .7rem;
  .menu1,
  .menu2,
  .icon {
    width: 25%;
  }
  .checked {
    font-size: 0.8rem;
    color: $black;
    font-weight: 700;
  }
}
</style>
