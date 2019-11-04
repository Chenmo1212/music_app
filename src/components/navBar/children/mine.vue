<template>
  <div id="mine">
    <div class="w-8 margin-auto">
<!-- header card -->
    <div class="header-card bg-green  shadow-lg radius padding-sm">
      <div class="row row1 h-lg lh-lg text-df flex">
        <div class="item flex">
          <span class="icon icon1 h-sm w-sm bg-black margin-right-xs"></span>
          <span class="tit">本地</span>
        </div>
        <div class="item flex">
          <span class="icon icon2 h-sm w-sm bg-black margin-right-xs"></span>
          <span class="tit">收藏</span>
        </div>
        <div class="item flex">
          <span class="icon icon3 h-sm w-sm bg-black margin-right-xs"></span>
          <span class="tit">喜欢</span>
        </div>
      </div>
      <div class="row row2 h-lg text-df lh-lg flex">
        <div class="item flex">
          <span class="icon icon1 h-sm w-sm bg-black margin-right-xs"></span>
          <span class="tit">播放历史</span>
        </div>
        <div class="item flex">
          <span class="icon icon2 h-sm w-sm bg-black margin-right-xs"></span>
          <span class="tit">下载记录</span>
        </div>
      </div>
    </div>

    <!-- 我的歌单 -->
    <div class="my-songlist margin-top">
      <div class="header text-df h-lg flex lh-lg">
        <span class="tit inline-block text-bold">我的歌单</span>
        <span class="arrow inline-block h-sm w-sm bg-black margin-right-xs"></span>
      </div>
      <div class="body flex">
        <div class="item bg-Pic1 h-lg w-lg shadow-lg radius"></div>
        <div class="item bg-Pic2 h-lg w-lg shadow-lg radius"></div>
        <div class="item bg-Pic3 h-lg w-lg shadow-lg radius"></div>
        <div class="item bg-Pic4 h-lg w-lg shadow-lg radius"></div>
      </div>
    </div>
    <!-- 我的收藏 -->
    <div class="my-favor margin-top">
      <div class="header text-df h-lg flex lh-lg">
        <span class="tit inline-block text-bold">我的收藏</span>
        <span class="arrow inline-block h-sm w-sm bg-black margin-right-xs"></span>
      </div>
      <div class="body flex">
        <div class="item bg-Pic1 h-lg w-lg shadow-lg radius"></div>
        <div class="item bg-Pic2 h-lg w-lg shadow-lg radius"></div>
        <div class="item bg-Pic3 h-lg w-lg shadow-lg radius"></div>
        <div class="item bg-Pic4 h-lg w-lg shadow-lg radius"></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
  .header-card {
    background: url(../../../assets/banner1.png) no-repeat;
    background-size: cover;
    .row1 {
      justify-content: space-between;
      align-items: center;
      .item {
        width: 33%;
        align-items: center;
        span {
          display: inline-block; 
        }
        .icon1 {
          background: url(../../../assets/global.png) no-repeat;
          background-size: cover;
        }
        .icon2 {
          background: url(../../../assets/favor.png) no-repeat;
          background-size: cover;
        }
        .icon3 {
          background: url(../../../assets/like.png) no-repeat;
          background-size: cover;
        }
      }
    }
    .row2 {
      justify-content: space-between;
      align-items: center;
      .item {
        width: 50%;
        align-items: center;
        span {
          display: inline-block; 
        }
        .icon1 {
          background: url(../../../assets/time.png) no-repeat;
          background-size: cover;
        }
        .icon2 {
          background: url(../../../assets/down.png) no-repeat;
          background-size: cover;
        }
      }
    }
  }

  .my-songlist {
    .header {
      justify-content: space-between;
      align-items: center;
      .arrow {
         background: url(../../../assets/right.png) no-repeat;
         background-size: cover;
      }
    }
    .body {
       justify-content: space-between;
      align-items: center;
      .bg-Pic1 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
      .bg-Pic2 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
      .bg-Pic3 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
      .bg-Pic4 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
    }
  }

  .my-favor {
    .header {
      justify-content: space-between;
      align-items: center;
      .arrow {
         background: url(../../../assets/right.png) no-repeat;
         background-size: cover;
      }
    }
    .body {
       justify-content: space-between;
      align-items: center;
      .bg-Pic1 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
      .bg-Pic2 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
      .bg-Pic3 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
      .bg-Pic4 {
        background: url(../../../assets/grass.jpg) no-repeat;
        background-size: cover;
      }
    }
  }
</style>