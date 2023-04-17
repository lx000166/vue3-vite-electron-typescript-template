<!--
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-13 13:26:45
 * @Description: 
-->
<script setup lang="ts">
  import { sidebarRoutes } from "@/router/lib/sidebarRoutes";
  import { useSideBarStore } from "@/store/sideBarStore";

  // side
  const store = useSideBarStore();

  // router
  const route = useRoute();
  const router = useRouter();
  const goPage = (path: string) => {
    router.push(path);
  };
</script>

<template>
  <div
    id="sidebar"
    :style="{ width: `${store.width}px`, transform: `translateX(-${store.translateX}px)` }"
    class="absolute top-0 left-0 h-screen z-40 font">
    <div class="user h-36"></div>
    <div
      @click="goPage(item.path)"
      v-for="item in sidebarRoutes"
      :key="item.path"
      :class="{ sideBarItem_active: item.path === route.path, sideBarItem_mini: !store.isBig }"
      class="sideBarItem w-full h-10 cursor-pointer">
      <div class="transBox pl-10 flex items-center w-full h-full">
        <app-icon class="icon appicon align-top" :type="item.meta.icon" />
        <span
          class="text inline-block overflow-hidden w-auto ml-3 text-[14px] align-top whitespace-nowrap">
          {{ item.meta.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  #sidebar {
    font-family: "LongShuHong";
    transition-property: width, transform;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.06, 0.88, 1, 0.04);
    .sideBarItem {
      transition: all 0.3s ease-in-out;
      .transBox {
        transition: all 0.3s ease-in-out;
      }
    }
    .sideBarItem:hover {
      box-shadow: inset 0px 0px 16px -11px var(--text-color-base);
    }
    .sideBarItem_active {
      box-shadow: inset 0px 0px 16px -9px #9d9999;
      .transBox {
        filter: drop-shadow(2px 4px 2px var(--text-color-base));
      }
    }
    .sideBarItem_mini {
      .transBox {
        padding-left: 0px;
        justify-content: center;
        .text {
          width: 0px;
          margin-left: 0;
        }
      }
    }
  }
</style>
