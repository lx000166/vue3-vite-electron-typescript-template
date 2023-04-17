<!--
 * @Author: lixin
 * @Date: 2022-08-17 10:12:16
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-13 13:31:53
 * @Description: 描述
-->
<script setup lang="ts">
  import { useSideBarStore } from "@/store/sideBarStore";

  // side
  const store = useSideBarStore();
  const router = useRouter();

  const gop = () => {
    console.log(111);

    router.push("/login");
  };

  const options = [
    {
      label: "杰·盖茨比",
      key: "jay gatsby"
    },
    {
      label: "黛西·布坎南",
      key: "daisy buchanan"
    },
    {
      type: "divider",
      key: "d1"
    },
    {
      label: "尼克·卡拉威",
      key: "nick carraway"
    },
    {
      label: "其他",
      key: "others1",
      children: [
        {
          label: "乔丹·贝克",
          key: "jordan baker"
        },
        {
          label: "汤姆·布坎南",
          key: "tom buchanan"
        },
        {
          label: "其他",
          key: "others2",
          children: [
            {
              label: "鸡肉",
              key: "chicken"
            },
            {
              label: "牛肉",
              key: "beef"
            }
          ]
        }
      ]
    }
  ];
  const message = useMessage();

  const showDropdown = ref(false);
  const x = ref(0);
  const y = ref(0);

  function handleSelect(key: string | number) {
    showDropdown.value = false;
    message.info(String(key));
  }
  function handleContextMenu(e: MouseEvent) {
    e.preventDefault();
    showDropdown.value = false;
    nextTick().then(() => {
      showDropdown.value = true;
      x.value = e.clientX;
      y.value = e.clientY;
    });
  }
  function onClickoutside() {
    message.info("clickoutside");
    showDropdown.value = false;
  }
</script>

<template>
  <div class="relative z-20">
    <NButton @click="gop" type="primary">123</NButton>
    <NButton @click="store.setHidden" type="error">setHidden</NButton>
    <NButton @click="store.changSize" type="warning">changSize</NButton>
    <div @contextmenu.stop="handleContextMenu" class="c h-52 bg-slate-600"></div>
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      :options="options"
      :show="showDropdown"
      :on-clickoutside="onClickoutside"
      @select="handleSelect" />
  </div>
</template>

<style lang="" scoped></style>
