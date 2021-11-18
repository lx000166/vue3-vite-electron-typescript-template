<!--
 * @Author: lx000
 * @Date: 2021-11-12 17:27:12
 * @LastEditTime: 2021-11-19 00:26:26
 * @Description: 描述
-->
<script setup lang="ts">
  const cyclicNav = [
    { par: "mini", icon: "icon-2zuixiaohua-2" },
    { par: "big", icon: "icon-zuidahua1" },
    { par: "close", icon: "icon-close-bold" }
  ];
  const navBarClick = (val: string) => {
    window.ipc.send("navBar", val);
  };
</script>
<template>
  <div class="iconBox">
    <span v-for="item in cyclicNav" :key="item.par" @click="navBarClick(item.par)" class="no-drag">
      <i style="font-size: 12px" :class="item.icon" class="iconfont"></i>
    </span>
  </div>
</template>
<style scoped>
  .iconBox > span {
    display: inline-block;
    text-align: center;
    height: 1.75rem;
    width: 1.75rem;
    line-height: 1.75rem;
  }
  .iconBox > span:hover {
    color: rgba(190, 24, 93, 1);
  }
  .iconBox > i {
    padding: 0;
  }
</style>
