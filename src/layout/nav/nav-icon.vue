<!--
 * @Author: lx000
 * @Date: 2021-11-12 17:27:12
 * @LastEditTime: 2021-11-17 21:35:11
 * @Description: 描述
-->
<script setup lang="ts">
const cyclicNav = [{ par: 'mini', icon: 'icon-2zuixiaohua-2' }, { par: 'big', icon: 'icon-zuidahua1' }, { par: 'close', icon: 'icon-close-bold' }]
const navBarClick = (val: string) => {
  window.ipc.send('navBar', val)
}
</script>
<template>
  <div class="iconBox">
    <span
      v-for="item in cyclicNav"
      :key="item.par"
      @click="navBarClick(item.par)"
      class="transition-colors duration-300 hover:text-pink-700 inline-block text-center h-7 w-7 no-drag leading-7"
    >
      <i style="font-size: 12px;" :class="item.icon" class="iconfont pt-0 pb-0"></i>
    </span>
  </div>
</template>