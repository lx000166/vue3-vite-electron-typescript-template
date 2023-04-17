/*
 * @Author: lixin
 * @LastEditors: lixin
 * @LastEditTime: 2023-04-12 10:04:37
 * @Description:
 */
namespace TransitionBG {
  interface RandomColorItem {
    start: [number, number, number];
    end: [number, number, number];
  }
  type RandomColor = RandomColorItem[];
  type colorParams = RandomColorItem | undefined;
}
