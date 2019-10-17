<template>
  <div id="app">
    <div class="toastBox">
      <div class="toast a-fadeInUp" v-show="toastShow" id="toast">{{toastText}}</div>
    </div>
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
      console.log(this.toastShow, '')
      if(this.toastShow) return;
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
  display: block;
  text-align: center;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 15%;
  // background-color: #eeeeee;
  width: 100%;
  max-width: 450px;
  z-index: 20;
}
.toast {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: rgba(17, 17, 17, 0.7);
  padding: 0.5rem 1rem;
  max-width: 8rem;
  font-size: 0.8rem;
}

.a-fadeInUp {
  -webkit-animation: 0.5s ease-out backwards;
  -moz-animation: 0.5s ease-out backwards;
  -ms-animation: 0.5s ease-out backwards;
  animation: 0.5s ease-out backwards;
  -webkit-animation-name: fadeInUp;
  -moz-animation-name: fadeInUp;
  -ms-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 10%, 0);
    transform: translate3d(0, 10%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}

@keyframes fadeOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.05);
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.a-fadeOut {
  -webkit-animation: 0.3s ease-out backwards;
  -moz-animation: 0.3s ease-out backwards;
  -ms-animation: 0.3s ease-out backwards;
  animation: 0.3s ease-out backwards;
  -webkit-animation-name: fadeOut;
  -moz-animation-name: fadeOut;
  -ms-animation-name: fadeOut;
  animation-name: fadeOut;
}
</style>
