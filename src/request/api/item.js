import service from "..";
// 获取歌单详情页的数据
export function getMusicItemList(data) {
  return service({
    methods: "GET",
    url: `/playlist/detail?id=${data}`,
  });
}

// 获取歌单全部歌曲的数据
export function getItemList(id) {
  return service({
    methods: "GET",
    url: `/playlist/track/all?id=${id}&limit=20&offset=0`,
  });
}
