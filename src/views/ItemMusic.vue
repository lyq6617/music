<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, getItemList } from "@/request/api/item";
import ItemMusicTop from "@/components/item/itemMusicTop.vue";
import ItemMusicList from "@/components/item/itemMusicList.vue";

export default {
  setup() {
    const state = reactive({
      playlist: {}, //歌单详情页的数据
      itemList: [], //歌单的歌曲
    });

    const route = useRoute();
    onMounted(async () => {
      let id = route.query.id;
      //获取歌单详情页
      let res = await getMusicItemList(id);
      console.log(res);
      state.playlist = res.data.playlist;
      // 获取歌单的歌曲
      let result = await getItemList(id);
      console.log(result);
      state.itemList = result.data.songs;
      // 防止页面刷新数据丢失，将数据保存在sessionStorage
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>
