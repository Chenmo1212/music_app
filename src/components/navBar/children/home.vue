<template>
  <div id="home">
    <div class="swipe h-df padding-tb-lg w-9 margin-auto bg-red">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item @click.native="toSongList(1)">1</mt-swipe-item>
        <mt-swipe-item @click.native="toSongList(2)">2</mt-swipe-item>
        <mt-swipe-item @click.native="toSongList(3)">3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {};
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

<style>
</style>