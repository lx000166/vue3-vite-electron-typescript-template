<!--
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-14 13:55:13
 * @Description: 
-->
<script setup lang="ts">
  import { useSideBarStore } from "@/store/sideBarStore";
  import type { DropdownProps } from "naive-ui";
  type DropdownThemeOverrides = NonNullable<DropdownProps["themeOverrides"]>;
  const store = useSideBarStore();

  const state = reactive({ x: 0, y: 0, show: false });
  const close = () => {
    state.show = false;
  };
  const options = [
    {
      label: "显示/隐藏边栏",
      key: "1",
      props: {
        onClick: () => {
          store.setHidden();
        }
      }
    },
    {
      label: "进入/退出全屏",
      key: "2",
      props: {
        onClick: () => {
          window.ipc.send("contentMenu", "fullScreen");
        }
      }
    },
    {
      label: "检查元素",
      key: "3",
      props: {
        onClick: () => {
          window.ipc.send("contentMenu", "openDevTool");
        }
      }
    },
    {
      label: "刷新页面",
      key: "4",
      props: {
        onClick: () => {
          window.ipc.send("contentMenu", "reloadIgnoringCache");
        }
      }
    }
  ];

  const themeOverrides: DropdownThemeOverrides = {
    // color: "transparent"
  };
  onMounted(() => {
    const layout = document.getElementById("layout") as HTMLDivElement | null;
    if (layout) {
      useEventListener(layout, "contextmenu", (evt: MouseEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
        state.x = evt.clientX;
        state.y = evt.clientY;
        state.show = true;
      });
    }
  });
</script>

<template>
  <n-dropdown
    size="small"
    class="rightClickMenu"
    :theme-overrides="themeOverrides"
    :options="options"
    placement="bottom-start"
    trigger="manual"
    :x="state.x"
    :y="state.y"
    :show="state.show"
    :on-clickoutside="close"
    @select="close" />
</template>

<style lang="less">
  html body {
    .rightClickMenu {
      margin-top: 0 !important;
      backdrop-filter: blur(9px);
      font-family: "LongShuHong";
      // font-weight: bold;
      .n-dropdown-option {
        .n-dropdown-option-body {
          &::before {
            background: none !important;
            // transition: all 0.3s ease;
          }
        }
        .n-dropdown-option-body--pending::before {
          box-shadow: inset 0px 0px 16px -11px var(--n-text-color);
        }
      }
      background-color: transparent;
    }
  }
</style>
