<template>
  <router-view />
  <footerMusic />
</template>

<script>
import footerMusic from "@/components/item/footerMusic.vue";
import service from "./request";
export default {
  components: {
    footerMusic,
  },
  mounted() {
    service({
      methods: "GET",
      url: `/login/status`,
    });
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}
</style>
