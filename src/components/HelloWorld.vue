<template>
  <div class="hello">
    <div class="box text-xx shadow padding-lg margin-lr-sm">12</div>
    <div class="bg-green round cu-btn">123s</div>
    <div class="cu-card-sm text-center" @click="setDat">
      我是toast
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
     
    };
  },
  methods:{
    ...mapActions([
      'setDialogToastContain'
    ]),

    setDat(){
      this.setDialogToastContain('哈哈哈哈');
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入scss
@import "../scss/common.scss";

.test {
  margin: 2rem;
}
</style>