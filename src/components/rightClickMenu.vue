<script setup lang="ts">
  const state = reactive({ x: 0, y: 0, show: false });
  const close = () => (state.show = false);
  const options = [
    { label: "xxx", key: "fn1" },
    { label: "点个外卖", key: "fn2" },
    { label: "刷新页面", key: "fn3" },
    { label: "打开控制台", key: "fn4" },
    { label: "进入/退出全屏", key: "fn5" }
  ];
  const methods: Gcom.Methods = {
    fn1: () => console.log(666),
    fn2: () => alert("毒蘑菇炒旧鞋跟"),
    fn3: () => window.ipc.send("contentMenu", "reloadIgnoringCache"),
    fn4: () => window.ipc.send("contentMenu", "openDevTool"),
    fn5: () => window.ipc.send("contentMenu", "fullScreen")
  };
  const rightClick = (key: string) => {
    methods[key] && methods[key]();
    close();
  };

  onMounted(() => {
    const div = document.getElementById("rightclick") as HTMLDivElement | null;
    if (div) {
      useEventListener(div, "contextmenu", (evt: MouseEvent) => {
        console.log(evt.clientX, evt.clientY);

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
  <div @click="close()" id="rightclick" class="rightclick">
    <ul :style="{ left: `${state.x}px`, top: `${state.y}px` }" v-show="state.show">
      <li @click="rightClick(item.key)" v-for="item in options">{{ item.label }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  .rightclick {
    background-color: rgba(0, 255, 255, 0.356);
    width: 100%;
    height: 400px;
    ul {
      margin: 0;
      position: fixed;
      left: 0;
      z-index: 100;
      background-color: aliceblue;
      li {
        cursor: pointer;
      }
    }
  }
</style>
