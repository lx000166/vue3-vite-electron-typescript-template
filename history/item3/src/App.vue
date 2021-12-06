<!--
 * @Author: lx000
 * @Date: 2021-12-03 10:05:24
 * @LastEditTime: 2021-12-06 14:31:03
 * @Description: 描述
-->
<script setup lang="ts">
  import ContentMenu from "./components/contentMenu.vue";
  import { Ref, ref } from "vue";
  import NavMenuItems from "./components/nav-menu-item.vue";

  const navBar = (val: string) => {
    window.ipc.send("navBar", val);
  };

  // * -------------- end --------------
  const Menu: Ref<null | menuObj[]> = ref(null);
  window.ipc.invoke("getAppMenu").then((result) => {
    console.log(result);

    Menu.value = result;
  });
  function handleClick(e: any) {
    window.ipc.send("MenuClick", e.key);
  }
</script>

<template>
  <ContentMenu>
    <div>
      <div>
        <div style="-webkit-app-region: no-drag; height: 100vh">
          <a-button @click="navBar('mini')" type="dashed" danger>最小化</a-button>
          <a-button @click="navBar('big')" type="dashed" danger>最大化</a-button>
          <a-button @click="navBar('close')" type="dashed" danger>关闭</a-button>
          <div class="menu">
            <div v-if="Menu" class="menuBox">
              <template v-for="item in Menu" :key="item.id">
                <a-dropdown
                  :getPopupContainer="(triggerNode: any) => triggerNode.parentNode"
                  :trigger="['click']"
                >
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
        </div>
      </div>
    </div>
  </ContentMenu>
</template>

<style lang="less">
  body {
    background: linear-gradient(165deg, rgba(170, 74, 106, 1), rgba(7, 51, 58, 1));
    height: 100vh;
    width: 100vw;
    // -webkit-app-region: drag;
  }
  .menu {
    color: rgba(7, 51, 58, 1);
    float: right;
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
