<!--
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-14 09:24:59
 * @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div id="layout" class="layout h-screen w-screen relative">
    <Sidebar />
    <Main>
      <template v-slot:navBar>
        <NavBar />
      </template>
      <div class="boxxx mt-6">
        <router-view></router-view>
      </div>
    </Main>
  </div>
  <!-- layout右键菜单 -->
  <GlobalRightClick />
</template>

<style lang="less" scoped></style>
