<!--
 * @Author: lx000
 * @Date: 2021-11-15 13:35:36
 * @LastEditTime: 2021-11-19 00:31:52
 * @Description:

-->
<script lang="ts" setup></script>
<template>
  <div class="main-container h-screen w-screen">
    <div class="main-wapper h-screen">
      <div class="main">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "@/assets/style/routerKeyframes.css";

  .main-container {
    padding-left: var(--sidebar-width);
  }
  .main-wapper {
    padding: 1.75rem /* 28px */;
  }
  .main {
    height: 100%;
    position: relative;
  }
</style>
