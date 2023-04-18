<!--
 * @Date: 2023-04-17 16:07:31
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-18 13:47:28
 * @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="page">
    <div>this is page-1</div>
    <!-- app主菜单 -->
    <div class="left">
      <Suspense>
        <AppMenu />
        <template #fallback> Loading... </template>
      </Suspense>
      <p style="color: crimson">
        因为设置了无框窗口,windows上菜单栏被隐藏了,这里通过进程通信拿到了主进程设置的菜单栏选项,通过各个组件库的下拉菜单等
        组件就可以实现类似vscode左上角的菜单栏
      </p>
    </div>
    <!-- 渲染进程右键菜单 -->
    <div class="right">
      <p>渲染进程右键菜单</p>
      <RightClickMenu />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .page {
    height: calc(100vh - var(--nav-height));
  }
  .left,
  .right {
    width: 50%;
    display: inline-block;
    vertical-align: top;
    margin-top: 40px;
  }
</style>
