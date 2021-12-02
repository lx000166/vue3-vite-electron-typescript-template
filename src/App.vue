<!--
 * @Author: lx000
 * @Date: 2021-11-04 10:11:30
 * @LastEditTime: 2021-12-02 16:00:14
 * @Description: 描述
-->
<script setup lang="ts">
  import { ref, computed, watch, watchEffect } from "vue";
  import { useRoute } from "vue-router";
  import { useTransition } from "@vueuse/core";
  import ContentMenu from "@/components/contentMenu.vue";
  const route = useRoute();

  const start = ref([170, 74, 106]);
  const end = ref([7, 51, 58]);

  const startOutput = useTransition(start);
  const endOutput = useTransition(end);

  const startColor = computed(() => {
    const [r, g, b] = startOutput.value;
    return `rgb(${r}, ${g}, ${b})`;
  });
  const endColor = computed(() => {
    const [r, g, b] = endOutput.value;
    return `rgb(${r}, ${g}, ${b})`;
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
  <ContentMenu>
    <router-view />
  </ContentMenu>
  <!-- 右键菜单 -->
</template>
