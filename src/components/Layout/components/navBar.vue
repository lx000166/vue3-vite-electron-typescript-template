<!--
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-12 10:21:58
 * @Description: 
-->
<script setup lang="ts">
  import { useStyleStore } from "@/store/themeStore";
  const store = useStyleStore();

  const navBarClick = (val: string) => {
    window.ipc.send("navBar", val);
  };
  // todo: 如果是开发模式,显示强制刷新与打开控制台按钮
  const isDev = import.meta.env.DEV;
</script>

<template>
  <div
    class="navBar z-10 drag w-full h-[var(--nav-height)] absolute left-0 top-0 flex justify-between">
    <!-- left -->
    <div class="no-drag h-full navBar_left">1</div>
    <!-- center -->
    <div class="no-drag h-full navBar_center text-gray-500 leading-6 text-sm">火星科技</div>
    <!-- right -->
    <div class="no-drag h-full navBar_right flex">
      <!-- ? light/night -->
      <div
        class="contentCenter h-full w-[var(--nav-height)] cursor-pointer mr-4"
        @click="store.setTheme">
        <AppIcon v-if="store.theme" type="icon-sun-1" />
        <AppIcon v-else c type="icon-moon-1" />
      </div>
      <!-- ? unmaximize/maximize/close -->
      <div
        @click="navBarClick('mini')"
        class="fixedIcon contentCenter h-full w-8 transition-colors hover:bg-slate-500 hover:bg-opacity-20">
        <AppIcon class="app-icon" type="icon-2zuixiaohua-2 " />
      </div>
      <div
        @click="navBarClick('big')"
        class="fixedIcon contentCenter h-full w-8 transition-colors hover:bg-slate-500 hover:bg-opacity-20">
        <AppIcon class="app-icon" type="icon-zuidahua1" />
      </div>
      <div
        @click="navBarClick('close')"
        class="fixedIcon contentCenter h-full w-8 transition-colors bg-opacity-70 hover:bg-[var(--error-color)]">
        <AppIcon class="app-icon" type="icon-close-bold" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .navBar {
    .navBar_center {
      font-family: "LongShuHong", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    }
    .navBar_right {
      .fixedIcon {
        cursor: pointer;
        .app-icon {
          font-size: 11px;
          opacity: 0.5;
        }
      }
    }
  }
</style>
