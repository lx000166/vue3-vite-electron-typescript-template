/*
 * @Author: lx000
 * @Date: 2021-10-18 11:36:01
 * @LastEditTime: 2021-11-18 16:31:32
 * @Description: 定时器相关的hooks
 */

// 延迟函数,等待time后执行下一句
function dealy(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
export { dealy };
