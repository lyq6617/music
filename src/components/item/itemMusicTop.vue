<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>

    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
  </div>

  <div class="itemTopContent">
    <div v-if="playlist.coverImgUrl" class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="" />
      <div class="playCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24gl-play"></use>
        </svg>
        <span>{{ changeCount(playlist.playCount) }}</span>
      </div>
    </div>
    <div class="contentRight">
      <p class="rightP_one">{{ playlist.name }}</p>
      <div v-if="playlist.creator.backgroundUrl" class="right_image">
        <img :src="playlist.creator.backgroundUrl" alt="" />
        <span>{{ playlist.creator.nickname }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou1-copy"></use>
        </svg>
      </div>

      <p class="rightP_two">
        <span>{{ playlist.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou1-copy"></use>
        </svg>
      </p>
    </div>
  </div>

  <div class="itemTopFooter">
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi-copy"></use>
      </svg>
      <span>{{ playlist.commentCount }}</span>
    </div>

    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang-copy"></use>
      </svg>
      <span>{{ playlist.shareCount }}</span>
    </div>

    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146-copy"></use>
      </svg>
      <span>下载</span>
    </div>

    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan-copy"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    // console.log(props);
    // 通过props传值，判断如果数据拿不到，就获取sessionstorage中的
    if ((props.playlist.creator = "")) {
      props.playlist.creator = JSON.parse(
        sessionStorage.getItem().playlist
      ).creator;
    }
  },
  props: ["playlist"],
  methods: {
    changeCount: function (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: .2rem;
  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;
    span {
      font-size: 0.4rem;
      color: #fff;
    }
    .icon {
      fill: #fff;
    }
  }
  .bgimg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
  }
}
.itemTopContent {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.5rem;
  margin-top: 30px;
  padding-left: 0.2rem;
  .contentLeft {
    position: relative;
    flex-shrink: 0;
    width: 33%;
    height: 2.5rem;
    img {
      width: 100%;
      height: 100%;
      left: 2.4rem;
      border-radius: 0.2rem;
    }
    .playCount {
      position: absolute;
      top: 0;
      right: 0.1rem;
      color: #fff;
      display: flex;
      align-items: center;
      .icon {
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }

  .contentRight {
    margin-left: 0.2rem;
    width: 100%;
    height: 2.2rem;
    .rightP_one {
      color: #fff;
    }
    .right_image {
      padding-top: 0.2rem;
      padding-left: 0.2rem;
      display: flex;
      align-items: center;
    }
    .icon {
      width: 0.3rem;
      height: 0.3rem;
    }
    img {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 10px;
    }
    .rightP_two {
      position: relative;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        padding-right: 0.5rem;
        padding-top: 0.2rem;
        color: #ecdcdcbd;
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        right: 0.17rem;
        top: 0.4rem;
      }
    }
  }
}
.itemTopFooter {
  padding: 0.4rem;
  display: flex;
  justify-content: space-around;
  .footerItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    span {
      padding-top: 10px;
    }
  }
}
</style>
