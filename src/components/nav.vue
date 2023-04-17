<script setup lang="ts" name="AppNav">
  const control = [
    { key: "mini", icon: "icon-2zuixiaohua-2" },
    { key: "big", icon: "icon-zuidahua1" },
    { key: "close", icon: "icon-close-bold" }
  ];

  const controlButtonClick = (val: string) => {
    window.ipc.send("navBar", val);
  };
</script>

<template>
  <div id="appNav" class="drag">
    <div class="no-drag appNav_left">
      <RouterLink to="page1">page1</RouterLink>
      <RouterLink to="page2">page2</RouterLink>
      <RouterLink to="page3">page3</RouterLink>
    </div>
    <div class="no-drag appNav_right">
      <div
        v-for="item in control"
        :key="item.key"
        @click="controlButtonClick(item.key)"
        class="controlButton">
        <AppIcon class="app-icon" :type="item.icon" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  #appNav {
    width: 100vw;
    height: var(--nav-height);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .appNav_left,
    .appNav_right {
      height: 100%;
    }
    .appNav_left a {
      color: rgb(2, 2, 2);
      line-height: var(--nav-height);
      margin-left: 10px;
    }
    .appNav_right {
      .controlButton {
        text-align: center;
        line-height: var(--nav-height);
        height: var(--nav-height);
        width: 36px;
        display: inline-block;
      }
    }
  }
</style>
