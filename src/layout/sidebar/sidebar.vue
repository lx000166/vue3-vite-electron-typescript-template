<!--
 * @Author: lx000
 * @Date: 2021-11-10 11:36:51
 * @LastEditTime: 2021-11-18 11:21:50
 * @Description: 描述
-->
<script lang="ts" setup>
  import { reactive } from "vue";
  import { sidebarRoutes } from "@/router/lib/sidebarRoutes";
  import { useRoute, useRouter, RouteRecordName } from "vue-router";
  import SButton from "./s-button.vue";
  import { isShow } from "@/hooks/useSidebar";

  /**------------------------路由控制--------- */
  const route = useRoute();
  const router = useRouter();
  const goPage = (name: RouteRecordName | undefined) => router.push({ name: name });
  /**------------------------路由控制--------- */
</script>

<template>
  <div class="sidebar-wapper pt-8 pb-8 pl-5 box-border h-screen fixed text-sm z-40 Swidth Stransition" :class="[isShow ? 'Sleft' : 'Sleft0']">
    <SButton></SButton>
    <div class="sidebar h-full rounded-xl w-full transition duration-300 p-2">
      <div
        :key="item.path"
        v-for="item of sidebarRoutes"
        @click="goPage(item.name)"
        class="menu-item rounded-lg leading-7 pl-3 mt-2 cursor-default"
        :class="{ 'menu-item-active': route.name == item.name }">
        <i class="iconfont mr-3 transition-colors duration-500" :class="item.meta.icon"></i>
        <span class="transition-colors duration-500 no-select">{{ item.meta.name }}</span>
      </div>
    </div>
  </div>
</template>
