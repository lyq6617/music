<template>
  <div style="margin-top: 2rem"></div>
  <van-cell-group inset>
    <van-field
      v-model.number="phone"
      label="手机号"
      placeholder="请输入手机号"
      type="number"
    />
    <van-field
      v-model.number="code"
      label="验证码"
      placeholder="请输入验证码"
      type="number"
    />
  </van-cell-group>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 0.6rem;
    "
  >
    <van-button type="primary" plain @click="toGetCode">获取验证码</van-button>
    <van-button type="primary" plain @click="toLogin">登 录</van-button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { login, getCode } from "@/request/api/login";

const phone = ref();
const code = ref();

const toGetCode = () => {
  getCode(phone.value);
};

const toLogin = async () => {
  await login(phone.value, code.value);
  alert("登录成功");
};
</script>

<style></style>
