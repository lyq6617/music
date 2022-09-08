import service from "..";
// 获取首页轮播图的数据
export function login(phone, captcha) {
  return service({
    methods: "GET",
    url: `/login/cellphone?phone=${phone}&captcha=${captcha}`,
  });
}

export function getCode(phone) {
  return service({
    methods: "GET",
    url: `/captcha/sent?phone=${phone}`,
  });
}
