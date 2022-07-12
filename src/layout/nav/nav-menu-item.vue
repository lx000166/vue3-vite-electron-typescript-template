<!--
 * @Author: lx000
 * @Date: 2021-11-14 20:01:25
 * @LastEditTime: 2022-07-12 18:00:30
 * @Description: 描述
-->
<script lang="ts" setup>
defineProps<{
  menuitem: menuObj[];
}>();
</script>
<template>
  <template v-for="menu in menuitem">
    <a-sub-menu v-if="menu.type == 'submenu'" :key="menu.id">
      <template #title>
        <span>{{ menu.lable }}</span>
        <span class="a-sub-menu-title iconfont icon-tuya_huabanfuben"></span>
      </template>
      <nav-menu-item v-if="menu.child" :menuitem="menu.child" />
    </a-sub-menu>
    <a-menu-item v-if="menu.type != 'submenu'" :key="menu.id">{{ menu.lable }}</a-menu-item>
  </template>
</template>
<style scoped>
.a-sub-menu-title {
  font-size: 0.75rem
    /* 12px */
  ;
  margin-left: 0.5rem
    /* 8px */
  ;
}
</style>
