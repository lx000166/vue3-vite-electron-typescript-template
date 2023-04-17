<!--
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-17 10:49:32
 * @Description: naiveUI的provider
-->
<script setup lang="ts">
  import { useStyleStore } from "@/store/themeStore";
  import { useTransitionBackground } from "@/hooks/useTransitionbackground/index";

  // naiveUI主题编辑器 全局语言,日期中文
  import { NThemeEditor, zhCN, dateZhCN } from "naive-ui";
  // 设置背景过渡
  useTransitionBackground();
  // 不能直接解构store,会丢失响应性
  const store = useStyleStore();
  // 从 store 中提取属性时保持其响应性，你需要使用 storeToRefs()。// 或者直接store.theme使用
  const { themeOverrides, theme } = storeToRefs(store);
</script>
<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
    :theme="theme">
    <n-message-provider>
      <n-theme-editor>
        <!-- 将naiveUI css变量传递到全局 -->
        <!-- useTransitionBackground作用的id -->
        <n-el id="appMain" class="h-screen w-screen"><slot></slot></n-el>
      </n-theme-editor>
    </n-message-provider>
  </n-config-provider>
</template>
<style lang="less" scoped>
  #appMain {
    transition: all 0.3s ease-in-out;
    color: var(--text-color-base);
    background: var(--base-color);
  }
</style>
