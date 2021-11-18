<!--
 * @Author: lx000
 * @Date: 2021-11-14 20:01:25
 * @LastEditTime: 2021-11-17 16:26:24
 * @Description: 描述
-->
<script lang="ts" setup>
defineProps<{
  menuitem: menuObj[]
}>()
</script>
<template>
  <template v-for="menu: menuObj in menuitem">
    <a-sub-menu v-if="menu.type == 'submenu'" :key="menu.id">
      <template #title>
        <span>{{ menu.lable }}</span>
        <span class="iconfont icon-tuya_huabanfuben text-xs ml-2"></span>
      </template>
      <nav-menu-item v-if="menu.child" :menuitem="menu.child" />
    </a-sub-menu>
    <a-menu-item v-if="menu.type != 'submenu'" :key="menu.id">{{ menu.lable }}</a-menu-item>
  </template>
</template>
