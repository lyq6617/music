import service from "..";
// 获取首页轮播图的数据
export function getBanner() {
    return service({
        methods: 'GET',
        url :'/banner?type=2'
    })
}

// 获取发现好歌单的数据
export function getMusicList() {
    return service({
        methods: 'GET',
        url:'/personalized/newsong=10'
    })
}