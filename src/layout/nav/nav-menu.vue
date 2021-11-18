<!--
 * @Author: lx000
 * @Date: 2021-11-14 19:19:46
 * @LastEditTime: 2021-11-19 00:24:55
 * @Description: 描述
-->
<script setup lang="ts">
  import { Ref, ref } from "vue";
  import NavMenuItems from "./nav-menu-item.vue";

  const Menu: Ref<null | menuObj[]> = ref(null);
  window.ipc.invoke("getAppMenu").then((result) => {
    Menu.value = result;
  });
  function handleClick(e: any) {
    window.ipc.send("MenuClick", e.key);
  }
</script>
<template>
  <div class="menuBox-wapper no-drag">
    <div v-if="Menu" class="menuBox">
      <template v-for="item in Menu" :key="item.id">
        <a-dropdown :getPopupContainer="(triggerNode: any) => triggerNode.parentNode" :trigger="['click']">
          <span class="menu-item no-select">{{ (item as menuObj).lable }}</span>
          <template #overlay>
            <a-menu @click="handleClick">
              <NavMenuItems v-if="item.child" :menuitem="item.child" />
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </div>
  </div>
</template>
<style scoped lang="less">
  .menuBox-wapper {
    .menuBox {
      font-size: 0.75rem /* 12px */;
      text-align: center;
      .menu-item {
        width: 2.5rem /* 40px */;
        height: 1.75rem /* 28px */;
        line-height: 1.75rem /* 28px */;
        background-color: rgba(31, 41, 55, 0);
        transition: background-color 0.2s;
        display: inline-block;
        &:hover {
          background-color: rgba(31, 41, 55, 0.3);
        }
      }
    }
  }
</style>
