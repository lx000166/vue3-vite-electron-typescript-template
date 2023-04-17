<!--
 * @Author: lixin
 * @Date: 2022-08-17 10:11:44
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-11 13:37:53
 * @Description: 描述
-->
<script setup lang="ts"></script>

<template>
  <div class="login_wapper pt-[var(--nav-height)]" w="screen" h="screen">
    <router-link to="/home">gohome</router-link>
    <div class="login" p="4">
      <Halo></Halo>
    </div>
  </div>
</template>

<style scoped>
  .login_wapper {
    background-image: url("@/assets/images/bg.jpeg");
    background-size: cover;
  }
</style>
