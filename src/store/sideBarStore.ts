/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-12 13:37:14
 * @Description:
 */

export const useSideBarStore = defineStore("sideBarStore", () => {
  // state
  const isBig = ref(true);
  const isHidden = ref(false);

  // getter
  const width = computed(() => (isBig.value ? 200 : 50));
  const translateX = computed(() => (isHidden.value ? width.value : 0));
  const paddingLeft = computed(() => `${width.value - translateX.value}`); //200 0

  // action
  const changSize = () => (isBig.value = !isBig.value);
  const setHidden = () => (isHidden.value = !isHidden.value);

  return { isBig, isHidden, width, translateX, paddingLeft, changSize, setHidden };
});
