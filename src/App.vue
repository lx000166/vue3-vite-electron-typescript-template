<!--
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-11-18 22:23:40
 * @Description: 描述
-->
<script setup lang="ts">
  import { ref, computed, watch, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import { useTransition } from "@vueuse/core";
  const route = useRoute();

  const start = ref([170, 74, 106]);
  const end = ref([7, 51, 58]);

  const startOutput = useTransition(start);
  const endOutput = useTransition(end);

  const startColor = computed(() => {
    const [r, g, b] = startOutput.value;
    return `rgba(${r}, ${g}, ${b},255)`;
  });
  const endColor = computed(() => {
    const [r, g, b] = endOutput.value;
    return `rgba(${r}, ${g}, ${b},255)`;
  });

  watch(
    () => route.fullPath,
    () => {
      start.value = route.meta.start as number[];
      end.value = route.meta.end as number[];
    }
  );
  watchEffect(() => {
    document.querySelector("html")?.style.setProperty("--start-transition-color", startColor.value);
    document.querySelector("html")?.style.setProperty("--end-transition-color", endColor.value);
  });
</script>
<template>
  <router-view />
</template>
