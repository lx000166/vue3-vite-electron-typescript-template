/*
 * @Author: lx000
 * @Date: 2021-12-02 16:54:19
 * @LastEditTime: 2021-12-02 17:42:28
 * @Description: 隐藏侧边栏
 */
export function hiddenSidebarfn() {
  /**
   * ? document.documentElement  HTML 文档返回对象为HTML元素。
   * ? getComputedStyle 返回计算后的最终渲染的元素style ,使用document.querySelector("html")?.style无法获取到css文件中定义的css变量
   */
  const w = getComputedStyle(document.documentElement)
    .getPropertyValue("--sidebar-offect-width")
    .trim();
  console.log(w);
  if (w == "15rem") {
    document.querySelector("html")?.style.setProperty("--sidebar-offect-width", "0rem");
  }
  if (w == "0rem") {
    document.querySelector("html")?.style.setProperty("--sidebar-offect-width", "15rem");
  }
}
