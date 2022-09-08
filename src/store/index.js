import { createStore } from "vuex";

export default createStore({
  state: {
    playList: [
      {
        //播放列表
        al: {
          id: 140309090,
          name: "婚礼（Wedding）",
          pic: 109951167042728620,
          picUrl:"https://p1.music.126.net/xjZuVl1BLBxambiPMVWt_w==/109951167042728617.jpg",
          pic_str: "109951167042728617",
        },
        id: 1919771880
      }],
    playListIndex: 0,//默认下标为0
    isbtnShow: true,//暂停按钮的显示
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      console.log(123);
      state.isbtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
      console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.updatePlayListIndex = value;
    }
  },
  getters: {},
  actions: {},
  modules: {},
});
