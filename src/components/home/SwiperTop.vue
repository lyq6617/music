<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import axios from "axios";
import { getBanner } from "@/request/api/home";
import { reactive, onMounted, ref } from "vue";

// vue3写法

const state = reactive({
  images: [],
});

// const banners = ref([]);

onMounted(async () => {
  // axios.get('http://localhost:3000/banner?type=2').then((res) => {
  //     console.log(res);
  //     state.images = res.data.banners
  //     console.log(state.images);
  // })

  let res = await getBanner();
  state.images = res.data.banners;
  console.log(res);
  // banners.value = res.data.banners;
});
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0 0.2rem;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
  }
  .van-swipe__indicator--active {
    background-color: rgb(219, 130, 130);
  }
}
</style>
