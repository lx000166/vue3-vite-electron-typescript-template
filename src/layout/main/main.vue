<!--
 * @Author: lx000
 * @Date: 2021-11-15 13:35:36
 * @LastEditTime: 2021-11-18 15:46:02
 * @Description:

-->
<script lang="ts" setup>
  import "@/assets/routerKeyframes.css";
</script>
<template>
  <div class="main-container h-screen w-screen pl-60">
    <div class="main-wapper h-screen p-7">
      <div class="main h-full relative">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
