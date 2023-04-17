
<script setup lang="ts">
  import { useSideBarStore } from "@/store/sideBarStore";

  // side
  const store = useSideBarStore();
</script>

<template>
  <div
    :style="{ paddingLeft: `${store.paddingLeft}px` }"
    class="main absolute top-0 right-0 h-screen w-screen">
    <slot name="navBar"></slot>

    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
  .main {
    transition-property: padding-left;
    transition-duration: 0.7s;
    transition-timing-function: cubic-bezier(0, 0.99, 0.78, 0.78);
  }
</style>
