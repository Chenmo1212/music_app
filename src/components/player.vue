<template>
  <div id="player">
      <div class="w-8 margin-auto margin-top-lg">
          <!-- 转动的专辑封面 -->
          <div id="album" class="album bg-red shadow-lg"  :class="{'rotate': ifRotate}">
            <img src="../assets/songs.jpg" alt="" class="h-10 w-10">
          </div>

          <!-- 滚动的歌词 -->
          <div class="margin-top-lg">
              <div class="h-sm text-center text-sm text-gray">Mad werld</div>
              <div class="h-sm text-center text-sm text-gray">who hloe xkaldfvy</div>
              <div class="h-sm text-center text-df text-black">Adam Lamdert</div>
              <div class="h-sm text-center text-sm text-gray">Nad wekld</div>
              <div class="h-sm text-center text-sm text-gray">who hloe xkaldfvy</div>
          </div>

          <div class="control flex margin-top-xl">
              <div class="favor h-sm w-sm" @click="setFavor">
                  <img src="../assets/love.png" alt="" class=" h-sm w-sm" v-if="ifFavor">
                  <img src="../assets/nolike.png" alt="" class=" h-sm w-sm" v-if="!ifFavor">
              </div>
              <div class="left h-sm w-sm"></div>
              <div class="pause h-df bg-green w-df" @click="setPlay">
                  <img src="../assets/pause.png" alt="" class="h-10 w-10" v-if="ifPlay">
                  <img src="../assets/player-play.png" alt="" class=" h-10 w-10" v-if="!ifPlay">
              </div>
              <div class="right h-sm bg-green w-sm"></div>
              <div class="download h-sm bg-green w-sm"></div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'player',
    data(){
        return {
            ifFavor:false,
            ifPlay:true,
            ifRotate: true,
        }
    },
    methods:{
    ...mapActions(["setDialogToastContain"]),
        // 设置喜欢
        setFavor(){
            this.ifFavor ? this.setDialogToastContain("取消喜欢成功") : this.setDialogToastContain("添加喜欢成功")
            this.ifFavor = !this.ifFavor;
        },
        // 暂停播放
        setPlay(){
            this.ifPlay = !this.ifPlay;
            this.ifPlay ? this.ifRotate = true : this.ifRotate = false;
        }
    }
}
</script>

<style lang="scss">
@import "../css/normalize.css";
    .album {
        height: 12rem;
        width: 12rem;
        border-radius: 50%;
        margin: auto;
        img {
            border-radius: 50%;
        }
    }
    .control {
        justify-content: space-between;
        align-items: center;
        .left {
            background: url(../assets/back.png);
            background-size: cover;
        }
        .pause {
            background: url(../assets/pause.png);
            background-size: cover;
        }
        .right {
            background: url(../assets/right-green.png);
            background-size: cover;
        }
        .download {
            background: url(../assets/down-green.png);
            background-size: cover;
        }
    }
    .pause {
        animation-fill-mode: forwards;
    }
    .rotate {
        -webkit-transition-property: -webkit-transform;
        -webkit-transition-duration: 2s;
        -moz-transition-property: -moz-transform;
        -moz-transition-duration: 2s;
        -webkit-animation: rotate 24s linear infinite;
        -moz-animation: rotate 24s linear infinite;
        -o-animation: rotate 24s linear infinite;
        animation: rotate 24s linear infinite;
    }

    @-webkit-keyframes rotate {
        from {
            -webkit-transform: rotate(0deg)
        }
        to {
            -webkit-transform: rotate(360deg)
        }
    }

    @-moz-keyframes rotate {
        from {
            -moz-transform: rotate(0deg)
        }
        to {
            -moz-transform: rotate(359deg)
        }
    }

    @-o-keyframes rotate {
        from {
            -o-transform: rotate(0deg)
        }
        to {
            -o-transform: rotate(359deg)
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(359deg)
        }
    }

    
</style>