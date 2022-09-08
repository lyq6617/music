<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <span class="playAll"
          >播放全部<span id="all">(共{{ itemList.length }}首)</span></span
        >
      </div>

      <div class="listRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao-copy"></use>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>

    <div class="itemList">
      <div class="item" v-for="(item, i) in itemList" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item, index) in item.ar" :key="index">{{
              item.name
            }}</span>
          </div>
        </div>

        <div class="itemRight">
          <svg class="icon" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-bofangliang-copy"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiao-copy"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  setup(props) {
    console.log(props);
  },
  props: ["itemList", "subscribedCount"],
  methods: {
    playMusic: function (i) {
      this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList','updatePlayListIndex'])
  }
};
</script>

<style lang="less" scoped>
.itemMusicList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .playAll {
        font-weight: 700;
        #all {
          font-size: 0.2rem;
          color: rgb(49 47 45 / 58%);
        }
      }
    }
    .listRight {
      height: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 0.2rem;
      border-radius: 3rem;
      background-color: red;
      color: #fff;
      font-size: 0.28rem;
      .icon {
        height: 0.36rem;
        width: 0.36rem;
      }
    }
  }
  .itemList {
    .item {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .leftSpan {
          padding: 0.2rem;
        }
        p {
          font-weight: 700;
        }
        span {
          color: rgb(49 47 45 / 58%);
        }
      }
    }
  }
}
</style>
