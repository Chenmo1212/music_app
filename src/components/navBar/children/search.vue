<template>
  <div id="search">
    <div class="searchBox cf bg-white h-lg lh-lg shadow relative">
      <div class="leftIcon fl h-lg absolute">
        <img src="../../../assets/search.png" alt="搜索" class="icon" />
      </div>
      <div class="main fl h-lg">
        <input type="search" class="search text-df w-9 text-gray" @focus="onfocus" @blur="onblur" @keyup.enter="search"/>
      </div>
      <div class="rightContent fl h-lg text-gray text-df" @click="search">取消</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "search",
  data() {
    return {
      value: "",
      tipMsg: "取消"
    };
  },
  computed: {
    ...mapState(["dialogToastContain"])
  },
  methods: {
    ...mapActions(["setDialogToastContain"]),

    onfocus() {
      // console.log("focus");
      this.tipMsg = "搜索";
    },
    onblur() {
      // console.log("blur");
      this.tipMsg = "取消";
    },
    search() {
      console.log(this.tipMsg);
      
      if (this.tipMsg === "取消") {
        this.$router.push({ name: "home" });
      } else {
        this.setDialogToastContain("搜索成功")
      }
    }
  },
  watch: {
    // 监听dialog-Toast内容变化
    dialogToastContain: function() {
      this.showToast();
    },
    $route(to, from) {
      this.showHeader(to.name);
    }
  }
};
</script>

<style lang='scss'>
.searchBox {
  .leftIcon {
    top: 0.1rem;
    left: 0.5rem;
    width: 12%;
    .icon {
      height: 0.8rem;
    }
  }
  .main {
    width: 85%;
  }
  .search {
    border-radius: 1.1rem;
    border: 1px solid #d5d5d5;
    padding: 0.2rem 0 0.2rem 1.6rem;
  }
}
</style>