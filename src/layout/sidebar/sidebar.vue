<!--
 * @Author: lx000
 * @Date: 2021-11-10 11:36:51
 * @LastEditTime: 2021-11-19 00:02:57
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
  <div class="sidebar-wapper box-border h-100vh fixed">
    <div class="sidebar">
      <div :key="item.path" v-for="item of sidebarRoutes" @click="goPage(item.name)" class="menu-item" :class="{ 'menu-item-active': route.name == item.name }">
        <i class="iconfont" :class="item.meta.icon"></i>
        <span class="no-select">{{ item.meta.name }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .sidebar-wapper {
    padding: 2rem 0 2rem 1.25rem;
    box-sizing: border-box;
    width: var(--sidebar-width);
    z-index: 10;

    .sidebar {
      height: 100%;
      width: 100%;
      padding: 0.5rem /* 8px */;
      border-radius: 0.5rem;
      box-shadow: 1px 1px 5px #00000017;
      transition-property: box-shadow, transform;
      transition-duration: 500ms;

      &:hover {
        transform: scale(1.007);
        box-shadow: 1px 1px 15px #00000017;
      }

      .menu-item {
        cursor: default;
        margin-top: 0.5rem;
        border-radius: inherit;
        transition: background-color 0.3s ease;
        padding: 0.2rem 0 0.3rem 0.75rem;
        i {
          margin-right: 0.75rem;
        }
      }
      .menu-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .menu-item-active {
        background-color: rgba(12, 32, 37, 0.15);
        text-shadow: 0 0 15px var(--end-transition-color);
      }
    }
  }
</style>
