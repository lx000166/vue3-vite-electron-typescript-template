/*
 * @Author: lx000
 * @Date: 2021-11-09 16:37:42
 * @LastEditTime: 2021-11-12 17:42:48
 * @Description: 描述
 */
const extendTheme = {
  height: { px24: "24px" },
  width: { px24: "24px" },
};
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: extendTheme,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
