<!--
 * @Date: 2023-04-18 10:35:05
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-18 13:04:14
 * @Description: app菜单
-->
<script setup lang="ts" name="AppMenu">
  const props = defineProps<{
    menu?: ElectronPriv.Menu;
  }>();
  const getAppMenu = async (): Promise<ElectronPriv.Menu> => await window.ipc.invoke("getAppMenu");
  const appMenu = props.menu ? props.menu : await getAppMenu();

  const menuItemClick = (id: string) => {
    window.ipc.send("MenuClick", id);
  };
</script>

<template>
  <div class="menuItem" v-for="item in appMenu">
    <span @click="menuItemClick(item.id)">{{ item.lable }}</span>
    <template v-if="item.child">
      <AppMenu :menu="item.child" />
    </template>
  </div>
</template>

<style lang="less" scoped>
  .menuItem {
    margin-left: 40px;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration: underline;
    .child {
      margin-left: 40px;
    }
  }
</style>
