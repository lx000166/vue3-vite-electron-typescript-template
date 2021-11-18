<!--
 * @Author: lx000
 * @Date: 2021-11-15 13:35:36
 * @LastEditTime: 2021-11-18 00:41:32
 * @Description:

-->
<script lang="ts" setup>
import "@/assets/routerKeyframes.css";
import { sidebarSwitch, isShow } from "@/hooks/useSidebar";

</script>
<template>
  <div class="main-container h-screen w-screen Stransition" :class="{ 'Spadding': !isShow }">
    <div class="main-wapper h-screen relative">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>


