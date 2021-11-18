<!--
 * @Author: lx000
 * @Date: 2021-11-10 11:36:51
 * @LastEditTime: 2021-11-18 12:14:15
 * @Description: 描述 
-->
<script lang="ts" setup>
  import { sidebarRoutes } from "@/router/lib/sidebarRoutes";
  import { useRoute, useRouter, RouteRecordName } from "vue-router";
  const route = useRoute();
  const router = useRouter();
  const goPage = (name: RouteRecordName | undefined) => router.push({ name: name });
</script>

<template>
  <div class="sidebar-wapper pt-8 pb-8 pl-5 box-border h-screen fixed text-sm z-40 w-60">
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
<style lang="less" scoped>
  .sidebar-wapper {
    transition-property: left;

    .sidebar {
      box-shadow: 1px 1px 5px #00000017;

      .menu-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .menu-item-active {
        background-color: rgba(12, 32, 37, 0.15);
        text-shadow: 0 0 15px var(--end-color-real);
      }
    }

    .sidebar:hover {
      transform: scale(1.007);
      box-shadow: 1px 1px 15px #00000017;
    }
  }
</style>
