/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-07 09:29:16
 * @Description:naiveui主题样式,侧边栏样式控制
 */

import type { GlobalThemeOverrides, GlobalTheme } from "naive-ui";
import { darkTheme } from "naive-ui";

/** ? 覆盖light主题全局样式 */
export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    // primaryColor: "#0D1721FF",
    borderRadius: "0px"
  },
  Button: {
    textColor: "#FF0000"
  }
};
/** ? 覆盖dark主题全局样式 */
export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    // primaryColor: "#eee",
    borderRadius: "0px",
    baseColor: "#242424"
  },
  Button: {
    textColor: "#FF0000"
  },
  Card: {
    color: "#242424"
  }
};

export const useStyleStore = defineStore("styleStore", () => {
  // * 主题
  /** state */
  // ?  null:lightTheme
  const theme: Ref<GlobalTheme | null> = ref(null);
  /** getters */
  const themeOverrides = computed(() => (theme.value ? darkThemeOverrides : lightThemeOverrides));
  /** action
   * @description: 切换亮/暗主题
   */
  const setTheme = () => (theme.value = theme.value ? null : darkTheme);

  return { theme, themeOverrides, setTheme };
});
