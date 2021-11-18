<!--
 * @Author: lx000
 * @Date: 2021-11-10 11:38:58
 * @LastEditTime: 2021-11-19 00:38:37
 * @Description: 描述
-->
<script setup lang="ts">
  import Halo from "@/components/halo.vue";
</script>
<template>
  <Container>
    <Halo class="fixed">welcome</Halo>
  </Container>
</template>
<style scoped>
  .halo {
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
