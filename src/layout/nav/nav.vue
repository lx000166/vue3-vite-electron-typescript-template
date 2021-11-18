<!--
 * @Author: lx000
 * @Date: 2021-11-09 19:25:56
 * @LastEditTime: 2021-11-18 08:37:04
 * @Description: 描述
-->
<script setup lang="ts">
import navIcon from "./nav-icon.vue";
import navMenu from "./nav-menu.vue";
import { isShow } from "@/hooks/useSidebar";

</script>

<template>
  <nav
    id="nav"
    class="drag fixed flex justify-between top-0 z-50 w-screen Stransition"
    :class="{ Sopacity: isShow }"
  >
    <navMenu />
    <navIcon />
  </nav>
</template>