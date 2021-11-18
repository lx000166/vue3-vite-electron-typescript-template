<!--
 * @Author: lx000
 * @Date: 2021-11-14 19:19:46
 * @LastEditTime: 2021-11-17 16:30:56
 * @Description: 描述
-->
<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import NavMenuItems from "./nav-menu-item.vue";


const Menu: Ref<null | menuObj[]> = ref(null)
window.ipc.invoke('getAppMenu').then((result) => { Menu.value = result })
function handleClick(e: any) {
  window.ipc.send('MenuClick', e.key)
}
</script>
<template>
  <div class="menuBox-wapper no-drag">
    <div v-if="Menu" class="menuBox text-xs text-center">
      <template v-for="item in Menu" :key="item.id">
        <a-dropdown
          :getPopupContainer="(triggerNode: any) => triggerNode.parentNode"
          :trigger="['click']"
        >
          <span
            class="no-select duration500ms h-7 w-10 leading-7 hover:bg-gray-800 hover:bg-opacity-20 inline-block transition-colors duration-500"
          >{{ (item as menuObj).lable }}</span>
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
